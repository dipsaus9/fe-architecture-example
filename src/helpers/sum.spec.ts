import { sum } from "./sum"

describe("Sum should correctly add numbers", () => {
  it("should add 1 + 2 and return 3", () => {
    expect(sum(1, 2)).toBe(3)
  })
})
