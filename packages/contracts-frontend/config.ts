import { ChainId } from '@usedapp/core'

export enum MinterType {
  FixedPriceSequentialMinter,
  FixedPriceSpecificIDMinter,
}
interface ContractsConfig {
  deployerAddress: string
  minterAddress: string
  tokenAddress: string
  timelockAddress: string
  governorAddress: string
  minterType: MinterType
}

type SupportedChains =
  | ChainId.Rinkeby
  | ChainId.Localhost
  | ChainId.OptimismKovan
  | ChainId.ArbitrumRinkeby
  | ChainId.Mumbai
  | ChainId.Mainnet

export const CHAIN_ID: SupportedChains = ChainId.Mainnet

const allConfigs: Record<SupportedChains, ContractsConfig> = {
  [ChainId.Localhost]: {
    deployerAddress: '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318',
    tokenAddress: '0x88577731Cc84560fE297792ab784b600A54728E2',
    minterAddress: '0x1910F44C232F040b63251E5B27970c254A74A1c7',
    governorAddress: '0x5B8B621aB7f02Ef3DD5d06718dADcAeD59818257',
    timelockAddress: '0xD605c48ae0C94D0A510Ae053F62042b7D467918E',
    minterType: MinterType.FixedPriceSequentialMinter,
  },
  [ChainId.Rinkeby]: {
    deployerAddress: '0xC95d98da541FF990D773F9015996d34663dF0735',
    tokenAddress: '0x59078Ff784e16617C8c16c1a94B293758824Cd76', // NFT
    minterAddress: '0x917e67234f841D27c565581676782DC1dF801ef2', // minter
    governorAddress: '0x0B6CcF57fE6a4fe8e6A4671CD58BC5CB4E9D95a6', // Governor
    timelockAddress: '0xA5D64E334B12B25AfB235Db4283e47F84e49fF20', // Timelock
    minterType: MinterType.FixedPriceSequentialMinter,
  },
  [ChainId.Mainnet]: {
    deployerAddress: '0xC95d98da541FF990D773F9015996d34663dF0735',
    tokenAddress: '0x0E69A12554accCb12e4D32a12B807D7Fd6Da220d',
    minterAddress: '0x91D879CA7957BD39aA90a48B2B937F31CF19e06c',
    governorAddress: '0x0Dee0D0D4Cf87C54F8e4611B578C6dC5E1B17359',
    timelockAddress: '0xdDd04BFBe72E86C76c669A3F19Cdbc0391aD4965',
    minterType: MinterType.FixedPriceSequentialMinter,
  },
  [ChainId.OptimismKovan]: {  
    deployerAddress: '0x8c49f49B3e5A2a469A09f4d8D11546Bc928c08Aa',
    tokenAddress: '0xf2fc15153d69688cb4Ce4869Afc49bcCcB9AFd3E',
    minterAddress: '0x9A179CC9cB50265cf7655eE11DEba68caC91FAa2',
    governorAddress: '0x35509a349A4871A574D67f148AfC5C7ed9350bAC',
    timelockAddress: '0x25d29e95c62aD053D293eeC14E29abA882B1ee94',
    minterType: MinterType.FixedPriceSequentialMinter,
  },
  [ChainId.ArbitrumRinkeby]: {
    deployerAddress: '0x660fC5AbA193Ed6eE7ECD73E8A120F5e1a0B036F',
    tokenAddress: '0x28d760ddC22bf1723d5eba1da192a20d1D90d908',
    minterAddress: '0x661cDc7f0bDE537e917a09C916EF8BA83f56950d',
    governorAddress: '0xE10cEC99859c93EdAdE86c1e01f99518720ad322',
    timelockAddress: '0x15ffE8d137a7Dc7a94FC6C48209ede092B7400Ea',
    minterType: MinterType.FixedPriceSequentialMinter,
  },
  [ChainId.Mumbai]: {
    deployerAddress: '0x34ceC65033aA345Ee2BAbe13529a5648cA7B3F4C',
    tokenAddress: '0x19790Fa212C0eB0dD1A2B96e08d979c51a0C4Df1',
    minterAddress: '0x65be2516FfA8CbbBB3433ef7404Aed1BC9cf6DB6',
    governorAddress: '0x1E154a139ba1C8343ecEB3BAFcEdf3b97B9d9631',
    timelockAddress: '0xc33f195848174C5FfC0Ba0A063fd1CfDd508B760',
    minterType: MinterType.FixedPriceSequentialMinter,
  },
}

export const secrets = {
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
}
export const config = allConfigs[CHAIN_ID]

// Multicall needs to be configured only for Localhost
export const multicallOnLocalhost = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
