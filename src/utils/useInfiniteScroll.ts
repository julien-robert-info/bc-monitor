import { useState } from 'react'

export const useInfiniteScroll = (
  initialLength: number,
  maxLength: number,
  step: number
) => {
  const [data, setData] = useState(
    Array.from({ length: Math.min(initialLength, maxLength) })
  )
  const [currentPage, setCurrentPage] = useState(Math.ceil(data.length / step))
  const [hasMore, setHasMore] = useState(true)
  const maxPage = Math.ceil(maxLength / step)

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
    setHasMore(() => currentPage !== maxPage)
    setData((data) =>
      Array.from({ length: Math.min(data.length + step, maxLength) })
    )
  }

  return { data, hasMore, next }
}
