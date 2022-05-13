import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { ChainId, useEthers, useSendTransaction } from '@usedapp/core'
import { providers, utils } from 'ethers'
import React, { useEffect, useReducer, useState } from 'react'
import {
  DEFAULT_TOKEN_SUPPLY,
  DEFAULT_TOKEN_PRICE,
  DEFAULT_MAX_MINTS,
  DEFAULT_TIMELOCK_DELAY,
  DEFAULT_PROP_THRESHOLD,
  DEFAULT_VOTING_DELAY,
  DEFAULT_VOTING_PERIOD,
  DEFAULT_QUORUM_NUMERATOR,
  DEFAULT_CREATOR_PERCENTAGE,
  DEFAULT_SALE_START_DELAY,
} from '../lib/contractUtils'
import { MintingFilterInputs } from '../components/MintingFilterInputs'
import { RoyaltiesParams } from '@create-nft-dao/shared'
import { MintingFilterParmas, StateType } from '../lib/wizardTypes'
import { wizardReducer } from '../lib/wizardReducerEventHandlers'
import { clone } from '../lib/deployer'
import { TokenInputs } from '../components/TokenInputs'
import { MinterInputs } from '../components/MinterInputs'
import { GovernorInputs } from '../components/GovernorInputs'
import { ClonesView } from '../components/ClonesView'
import { Web3Provider } from '@ethersproject/providers'
import { ChainSelector } from '../components/ChainSelector'
import { Layout } from '../layout/Layout'
import { FormSection } from '../layout/FormSection'

/**
 * Constants & Helpers
 */
const localProvider = new providers.StaticJsonRpcProvider(
  'http://localhost:8545'
)

/**
 * Component
 */
function getDefaultStartBlock(library: Web3Provider): number {
  return library && library.getSigner().provider.blockNumber > 0
    ? library.getSigner().provider.blockNumber + DEFAULT_SALE_START_DELAY
    : 0
}

const initialState: StateType = {
  isLoading: false,
  tokenConfig: {
    name: '',
    symbol: '',
    baseURI: '',
    contractInfoURI: '',
  },
  minterConfig: {
    implementationIndex: 0,
    maxTokens: DEFAULT_TOKEN_SUPPLY,
    tokenPrice: DEFAULT_TOKEN_PRICE,
    maxMintsPerTx: DEFAULT_MAX_MINTS,
    creatorPercentage: DEFAULT_CREATOR_PERCENTAGE,
    startingBlock: 0,
    creatorShareAddress: '',
    extraInitCallData: '',
  },
  governorConfig: {
    name: '',
    proposalThreshold: DEFAULT_PROP_THRESHOLD,
    votingDelay: DEFAULT_VOTING_DELAY,
    votingPeriod: DEFAULT_VOTING_PERIOD,
    quorumNumerator: DEFAULT_QUORUM_NUMERATOR,
    timelockDelay: DEFAULT_TIMELOCK_DELAY,
    upgradable: false,
  },
  mintingFilterConfig: {
    useMintingFilter: false,
    tokens: [],
  },
  royaltiesConfig: {
    royaltiesBPs: 0,
    isRoyaltiesRecipientOverrideEnabled: false,
    royaltiesRecipientOverride: '',
  },
  clones: null,
}

function HomeIndex(): JSX.Element {
  const [state, dispatch] = useReducer(wizardReducer, initialState)
  const { account, chainId, library } = useEthers()
  const [clonesBlockNumber, setClonesBlockNumber] = useState(0)
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure()
  const [
    didSetStartBlockWithLatestChainValue,
    setDidSetStartBlockWithLatestChainValue,
  ] = useState(false)

  useEffect(() => {
    if (
      getDefaultStartBlock(library) !== 0 &&
      !didSetStartBlockWithLatestChainValue
    ) {
      setStartingBlockDefaultValue(getDefaultStartBlock(library))
      setDidSetStartBlockWithLatestChainValue(true)
    }
  }, [getDefaultStartBlock(library)])

  useEffect(() => {
    if (!state.minterConfig.creatorShareAddress && account) {
      onMinterConfigChange({
        ...state.minterConfig,
        creatorShareAddress: account,
      })
    }
  }, [account])

  const isLocalChain =
    chainId === ChainId.Localhost || chainId === ChainId.Hardhat

  // Use the localProvider as the signer to send ETH to our wallet
  const { sendTransaction } = useSendTransaction({
    signer: localProvider.getSigner(),
  })

  async function deployClones(e) {
    e.preventDefault()
    if (!library) {
      // TODO
    }

    dispatch({
      type: 'SET_LOADING',
      isLoading: true,
    })

    try {
      const cloneResult = await clone(account, library, state, chainId)

      setClonesBlockNumber(cloneResult.clonesBlockNumber)
      dispatch({
        type: 'SET_CLONES',
        clones: cloneResult.clones,
      })
      onModalOpen()
    } catch (e) {
      window.alert(`Got an error: ${e.message}`)
    }

    dispatch({
      type: 'SET_LOADING',
      isLoading: false,
    })
  }

  function sendFunds(): void {
    sendTransaction({
      to: account,
      value: utils.parseEther('1'),
    })
  }

  function setStartingBlockDefaultValue(startingBlock: number) {
    dispatch({
      type: 'SET_MINTER_CONFIG',
      minterConfig: {
        ...state.minterConfig,
        startingBlock: startingBlock,
      },
    })
  }

  function onTokenConfigChange(newValues) {
    dispatch({
      type: 'SET_TOKEN_CONFIG',
      tokenConfig: newValues,
    })
  }

  function onRoyaltiesConfigChange(newValues: RoyaltiesParams) {
    dispatch({
      type: 'SET_ROYALTIES_CONFIG',
      royaltiesConfig: newValues,
    })
  }

  function onMinterConfigChange(newValues) {
    dispatch({
      type: 'SET_MINTER_CONFIG',
      minterConfig: newValues,
    })
  }

  function onGovernorConfigChange(newValues) {
    dispatch({
      type: 'SET_GOVERNOR_CONFIG',
      governorConfig: newValues,
    })
  }

  function onMintingFilterConfigChange(newValues: MintingFilterParmas) {
    dispatch({
      type: 'SET_MINTING_FILTER_CONFIG',
      mintingFilterConfig: newValues,
    })
  }

  return (
    <Layout>
      <Box>
        <form onSubmit={deployClones}>
          <Stack spacing="25px">
            <ChainSelector />
            <TokenInputs
              tokenConfig={state.tokenConfig}
              onTokenConfigChange={onTokenConfigChange}
              royaltiesConfig={state.royaltiesConfig}
              onRoyaltiesConfigChange={onRoyaltiesConfigChange}
            />
            <FormSection>
              <MinterInputs
                minterConfig={state.minterConfig}
                onMinterConfigChange={onMinterConfigChange}
                defaultStartBlock={getDefaultStartBlock(library)}
              />
              <MintingFilterInputs
                mt="26px"
                values={state.mintingFilterConfig}
                onValuesChange={onMintingFilterConfigChange}
              />
            </FormSection>
            <GovernorInputs
              governorConfig={state.governorConfig}
              onGovernorConfigChange={onGovernorConfigChange}
            />
          </Stack>
          <Flex>
            <Button
              name="submit"
              type="submit"
              margin="40px auto"
              size="lg"
              colorScheme="teal"
              isLoading={state.isLoading}
              isDisabled={!library}
            >
              Deploy Clones
            </Button>
          </Flex>
        </form>
      </Box>
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent maxW="840px">
          <ModalCloseButton />
          <ModalBody>
            {state.clones !== null ? (
              <ClonesView
                clones={state.clones}
                clonesBlockNumber={clonesBlockNumber}
                governorName={state.governorConfig.name}
                needsVerification={state.governorConfig.upgradable}
              />
            ) : (
              <></>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
      {chainId == ChainId.Localhost ? (
        <Box maxWidth="container.sm" mt={16} ms={4}>
          <Text mb="4">This button only works on a Local Chain.</Text>
          <Button onClick={sendFunds} isDisabled={!isLocalChain}>
            Send Funds From Local Hardhat Chain
          </Button>
        </Box>
      ) : (
        <></>
      )}
    </Layout>
  )
}

export default HomeIndex
