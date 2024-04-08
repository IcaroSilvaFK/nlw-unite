import { renderHook, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useDebounce } from './useDebounce'
import { act } from 'react-dom/test-utils'


describe("#useDebounce", () => {
  it("Should a render with default value in current state", () => {
    const { result } = renderHook(() => useDebounce({ value: "icaro" }))
    const expected = "icaro"

    expect(result.current[0]).toBe(expected)
  })

  it("Should change value in debounced and current value", async () => {

    const { result } = renderHook(() => useDebounce({ value: "" }))

    act(() => {
      result.current[2]("Icaro")
    })

    expect(result.current[0]).toBe("Icaro")

    await waitFor(() => {
      expect(result.current[1]).toBe("Icaro")
    }, {
      timeout: 2000
    })
  })
})