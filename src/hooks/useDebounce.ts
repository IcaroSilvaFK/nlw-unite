import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useDebounce<T>({ value, time = 1000 }: { value: T | (() => T); time?: number; }): [
  T, T, Dispatch<SetStateAction<T>>
] {
  const [realValue, setRealValue] = useState(value)
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    setTimeout(() => {
      setDebouncedValue(realValue)
    }, time)
  }, [realValue, time])


  return [realValue, debouncedValue, setRealValue]
}