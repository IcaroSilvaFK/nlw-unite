import { describe, it, expect } from "vitest";
import { act, renderHook } from '@testing-library/react'
import { usePaginate } from "./usePaginate";


describe("#usePaginate", () => {
  it("Should a next page when func next is called", () => {
    const { result } = renderHook(() => usePaginate({
      quantityPages: 10
    }))

    act(() => {
      result.current.next()
    })
    expect(result.current.page).toBe(2)
  })
  it("Should not return page when current page is first page", () => {
    const { result } = renderHook(() => usePaginate({
      quantityPages: 10
    }))

    act(() => {
      result.current.prev()
    })

    expect(result.current.page).toBe(1)
  })

  it("Should return one page when current not is first page", () => {
    const { result } = renderHook(() => usePaginate({
      quantityPages: 10
    }))


    act(() => {
      result.current.next()
    })

    expect(result.current.page).toBe(2)

    act(() => {
      result.current.prev()
    })

    expect(result.current.page).toBe(1)
  })

  it("Should jump to page when page is valid", () => {

    const { result } = renderHook(() => usePaginate({
      quantityPages: 10
    }))


    act(() => {
      result.current.go(4)
    })

    expect(result.current.page).toBe(4)
  })

  it("Should error when pass page invalid", () => {
    const { result } = renderHook(() => usePaginate({
      quantityPages: 10
    }))

    const page = 100

    expect(() => result.current.go(page)).toThrowError(`This page ${page} is not valid.`)
  })

})