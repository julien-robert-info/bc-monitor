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
  },
  1285: {
    chainName: 'Moonriver',
    nativeCurrency: {
      name: 'Moonriver',
      symbol: 'MOVR',
      decimals: 18
    },
    rpcUrls: 'https://rpc.moonriver.moonbeam.network',
    blockExplorerUrls: 'https://moonriver.moonscan.io/'
  },
  25: {
    chainName: 'Cronos',
    nativeCurrency: {
      name: 'CRO',
      symbol: 'CRO',
      decimals: 18
    },
    rpcUrls: 'https://evm-cronos.crypto.org',
    blockExplorerUrls: 'https://cronos.crypto.org/explorer/'
  },
  122: {
    chainName: 'Fuse',
    nativeCurrency: {
      name: 'FUSE',
      symbol: 'FUSE',
      decimals: 18
    },
    rpcUrls: 'https://rpc.fuse.io',
    blockExplorerUrls: 'https://explorer.fuse.io/'
  },
  1088: {
    chainName: 'Metis',
    nativeCurrency: {
      name: 'METIS',
      symbol: 'METIS',
      decimals: 18
    },
    rpcUrls: 'https://andromeda.metis.io/?owner=1088',
    blockExplorerUrls: 'https://andromeda-explorer.metis.io/'
  },
  1313161554: {
    chainName: 'Aurora Mainnet',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: 'https://mainnet.aurora.dev',
    blockExplorerUrls: 'https://explorer.mainnet.aurora.dev/'
  },
  1284: {
    chainName: 'Moonbeam',
    nativeCurrency: {
      name: 'GLMR',
      symbol: 'GLMR',
      decimals: 18
    },
    rpcUrls: 'https://rpc.api.moonbeam.network',
    blockExplorerUrls: 'https://moonscan.io/'
  },
  100: {
    chainName: 'Gnosis',
    nativeCurrency: {
      name: 'xDai',
      symbol: 'xDai',
      decimals: 18
    },
    rpcUrls: 'https://rpc.xdaichain.com/',
    blockExplorerUrls: 'https://blockscout.com/poa/xdai'
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
