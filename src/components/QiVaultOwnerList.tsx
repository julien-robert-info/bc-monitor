import React, { useState } from 'react'
import useEtherSWR from 'ether-swr'
import {
  List,
  CircularProgress,
  Box,
  FormControlLabel,
  Checkbox
} from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useInfiniteScroll } from 'utils'
import QiVaultOwnerRow from './QiVaultOwnerRow'

const QiVaultOwnerList: React.FC<{ address: string }> = ({ address }) => {
  const { data: vaultCount } = useEtherSWR([address, 'vaultCount'])
  const { data, hasMore, next } = useInfiniteScroll(100, vaultCount, 20)
  const [lastLoaded, setLastLoaded] = useState(0)

  const [hideZeroDebt, setHideZeroDebt] = React.useState(true)
  const [nearLiquidation, setNearLiquidation] = React.useState(false)

  const owners: any[] = []
  data.map((_, index) => {
    owners.push(
      <QiVaultOwnerRow
        key={index}
        address={address}
        vaultId={index}
        lastLoaded={lastLoaded}
        setLastLoaded={setLastLoaded}
        hideZeroDebt={hideZeroDebt}
        nearLiquidation={nearLiquidation}
      />
    )
  })

  const isLoading = lastLoaded !== data.length - 1

  //preload data until scroll
  React.useEffect(() => {
    const root = document.getElementById('__next')
    if (
      hasMore &&
      !isLoading &&
      root &&
      root.scrollHeight <= window.innerHeight
    ) {
      next()
    }
  })

  return (
    <>
      {vaultCount && (
        <List>
          <FormControlLabel
            control={
              <Checkbox
                checked={hideZeroDebt}
                onChange={() => setHideZeroDebt(!hideZeroDebt)}
              />
            }
            label="Hide zero debt"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={nearLiquidation}
                onChange={() => setNearLiquidation(!nearLiquidation)}
              />
            }
            label="10% above liquidation"
          />
          <InfiniteScroll
            dataLength={data.length}
            next={next}
            hasMore={hasMore}
            loader={null}
          >
            {owners}
          </InfiniteScroll>
          {isLoading && (
            <Box sx={{ height: '48px', mt: '1em' }}>
              <CircularProgress />
            </Box>
          )}
        </List>
      )}
    </>
  )
}

export default QiVaultOwnerList
