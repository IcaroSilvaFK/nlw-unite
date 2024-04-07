import { useCallback, useMemo } from "react";

export function useSearchParams() {
  const location = window.location
  const url = useMemo(() => new URL(location.toString()), [location])


  const getSearchParam = useCallback((key: string) => {
    return url.searchParams.get(key)
  }, [url])

  const pushStateUrl = useCallback((key: string, value: string) => {

    url.searchParams.set(key, value)
    window.history.pushState({}, "", url)
  }, [url])


  return {
    getSearchParam,
    pushStateUrl
  }
}