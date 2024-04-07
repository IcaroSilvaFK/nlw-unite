import { describe, it, expect } from "vitest"
import { mergeCss } from "./mergeCss"


describe("#mergeCss", () => {
  it("Should merge css class on default", () => {
    const base = "test-1 test-2 test-3"
    const expected = "test-1 test-2 test-3 test-4"

    const result = mergeCss(base, "test-4")

    expect(result).toBe(expected)
  })

  it("Should not merge compare is false", () => {
    const base = "test-1 test-2"
    const expected = "test-1 test-2"

    const result = mergeCss(base, false && "test-3")

    expect(result).toBe(expected)
  })

})