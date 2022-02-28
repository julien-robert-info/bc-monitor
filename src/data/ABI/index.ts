import { qiVaults } from 'data/qiVaults'
import qiVaultABI from './qiVault.json'

const ABIs = (chainId: number) => {
  const matrix = qiVaults[chainId] ?? []
  return Object.entries(
    matrix.reduce((memo, item) => {
      return {
        ...memo,
        [item.address]: qiVaultABI
      }
    }, {})
  )
}

export default ABIs
