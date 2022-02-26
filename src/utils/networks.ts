import { NetworkConnector } from '@web3-react/network-connector'

interface ChainInfo {
  chainName: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls: string
  blockExplorerUrls: string
}

export const chains: { [chainId: number]: ChainInfo } = {
  56: {
    chainName: 'BSC Mainnet',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18
    },
    rpcUrls: 'https://bsc-dataseed.binance.org',
    blockExplorerUrls: 'https://bscscan.com/'
  },
  128: {
    chainName: 'HECO Mainnet',
    nativeCurrency: {
      name: 'Huobi Token',
      symbol: 'HT',
      decimals: 18
    },
    rpcUrls: 'https://http-mainnet.hecochain.com',
    blockExplorerUrls: 'https://hecoinfo.com/'
  },
  43114: {
    chainName: 'Avalanche C-Chain',
    nativeCurrency: {
      name: 'AVAX',
      symbol: 'AVAX',
      decimals: 18
    },
    rpcUrls: 'https://api.avax.network/ext/bc/C/rpc',
    blockExplorerUrls: 'https://cchain.explorer.avax.network/'
  },
  137: {
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    },
    rpcUrls: 'https://polygon-rpc.com',
    blockExplorerUrls: 'https://polygonscan.com/'
  },
  250: {
    chainName: 'Fantom Opera',
    nativeCurrency: {
      name: 'FTM',
      symbol: 'FTM',
      decimals: 18
    },
    rpcUrls: 'https://rpc.ftm.tools',
    blockExplorerUrls: 'https://ftmscan.com/'
  },
  1666600000: {
    chainName: 'Harmony One',
    nativeCurrency: {
      name: 'ONE',
      symbol: 'ONE',
      decimals: 18
    },
    rpcUrls: 'https://api.s0.t.hmny.io/',
    blockExplorerUrls: 'https://explorer.harmony.one/'
  },
  42161: {
    chainName: 'Arbitrum One',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: 'https://arb1.arbitrum.io/rpc',
    blockExplorerUrls: 'https://arbiscan.io/'
  },
  42220: {
    chainName: 'Celo',
    nativeCurrency: {
      name: 'CELO',
      symbol: 'CELO',
      decimals: 18
    },
    rpcUrls: 'https://forno.celo.org',
    blockExplorerUrls: 'https://explorer.celo.org/'
  }
}

const urls: { [chainId: number]: string } = Object.keys(chains).reduce<{
  [chainId: number]: string
}>((accumulator, chainId) => {
  accumulator[Number(chainId)] = chains[Number(chainId)].rpcUrls

  return accumulator
}, {})

export const networkConnector = new NetworkConnector({
  urls,
  defaultChainId: 137
})
