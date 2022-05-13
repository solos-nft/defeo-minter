import { ChakraProvider } from '@chakra-ui/react'
import {
  ArbitrumRinkeby,
  ChainId,
  Config,
  DAppProvider,
  Hardhat,
  Localhost,
  Mainnet,
  Mumbai,
  OptimismKovan,
  Rinkeby,
} from '@usedapp/core'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
// import '../css/app.css'
import { CHAIN_ID, multicallOnLocalhost } from '../config'

const config: Config = {
  readOnlyChainId: CHAIN_ID,
  readOnlyUrls: {
    [ChainId.Mainnet]:
      process.env.NEXT_PUBLIC_MAINNET_JSON_RPC ||
      'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    [ChainId.Rinkeby]:
      process.env.NEXT_PUBLIC_RINKEBY_JSON_RPC ||
      'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    [ChainId.OptimismKovan]: 'https://kovan.optimism.io',
    [ChainId.ArbitrumRinkeby]: 'https://rinkeby.arbitrum.io/rpc',
    [ChainId.Hardhat]: 'http://localhost:8545',
    [ChainId.Localhost]: 'http://localhost:8545',
    [ChainId.Mumbai]:
      'https://rpc-mumbai.maticvigil.com/v1/02ce83b56ad2783400835e64c6775f90ba09b376',
  },
  networks: [
    Mainnet,
    Rinkeby,
    Localhost,
    Hardhat,
    OptimismKovan,
    ArbitrumRinkeby,
    Mumbai,
  ],
  multicallAddresses: {
    [ChainId.Localhost]: multicallOnLocalhost,
  },
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <DAppProvider config={config}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossOrigin" />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Syne+Tactile&display=swap" rel="stylesheet" /> 
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </DAppProvider>
  )
}

export default MyApp
