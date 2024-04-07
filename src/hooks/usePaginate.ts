import { useCallback, useState } from 'react'
import { useSearchParams } from './useSearchParams'

type Props = {
  quantityPages: number,
}

export function usePaginate(props: Props) {
  const { quantityPages } = props

  const { pushStateUrl, getSearchParam } = useSearchParams()


  const [page, setPage] = useState(() => {
    const defaultPage = getSearchParam("page");
    if (defaultPage) {
      return Number(defaultPage);
    }
    return 1;
  });


  const go = useCallback((page: number) => {
    if (page < 1 || page > quantityPages) {
      console.log("is not valid")
      throw new Error(`This page ${page} is not valid.`)
    }
    setPage(page)
    pushStateUrl("page", String(page))
  }, [pushStateUrl, quantityPages])

  const next = useCallback(() => {
    const newValue = page <= quantityPages ? page + 1 : page
    setPage(newValue)
    pushStateUrl("page", String(newValue))
  }, [page, pushStateUrl, quantityPages])

  const prev = useCallback(() => {
    const newValue = page > 1 ? page - 1 : 1
    setPage(newValue)
    pushStateUrl("page", String(newValue))
  }, [page, pushStateUrl])


  return {
    go,
    next,
    prev,
    page
  }
}