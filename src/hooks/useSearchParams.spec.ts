import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { useSearchParams } from './useSearchParams'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'


vi.mock("window.location", () => ({
  toString: "https:localhost:3000?code=1234"
}))

describe("#useSearchParams", () => {
  const originalLocation = window.location

  beforeEach(() => {
    Object.defineProperty(window, "location", {
      configurable: true,
      enumerable: true,
      value: new URL(`${window.location.href}?code=1234`)
    })
  })

  afterEach(() => {
    Object.defineProperty(window, "location", {
      configurable: true,
      enumerable: true,
      value: originalLocation,
    })
  })

  it("Should a change url search params", () => {
    const { result } = renderHook(useSearchParams)



    expect(result.current.getSearchParam("code")).toBe("1234")
  })

  it("Should pushState to url", () => {

    window.history.pushState = vi.fn()

    const { result } = renderHook(useSearchParams)

    act(() => {
      result.current.pushStateUrl("name", "test")
    })

    expect(window.history.pushState).toBeCalled()
  })
})