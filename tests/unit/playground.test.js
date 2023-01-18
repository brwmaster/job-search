import { describe, it, expect } from "vitest";
import { evenOrOdd } from "@/playground";

describe("Basic math", () => {
  it("adds two numbers correctly", () => {
    expect(2 + 2).toBe(4);
  });

  describe("even or odd", () => {
    it("indicates the number is even", () => {
      expect(evenOrOdd(4)).toBe("even");
    });

    it("indicates the number is odd", () => {
      expect(evenOrOdd(5)).toBe("odd");
    });
  });
});
