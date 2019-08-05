import { Lazy } from "../src/lazy";

describe("Lazy<T>", () => {
  let lazy: Lazy<number>;

  describe("before initialize", () => {
    let i = 0;

    beforeAll(() => {
      lazy = new Lazy<number>(() => ++i);
    });

    it("isValueInitialize returns false", () => {
      expect(lazy.isValueInitialize).toBeFalsy();
    });

    it("_value (private) is undefined", () => {
      expect(lazy["_value"]).toBeUndefined();
    });
  });

  describe("after initialize (called value)", () => {
    let i = 0;

    beforeAll(() => {
      lazy = new Lazy<number>(() => ++i);
    });

    it("initialize once", () => {
      expect(lazy.value).toBe(1);
      expect(lazy.value).toBe(1);
    });

    it("isValueInitialized returns true", () => {
      expect(lazy.isValueInitialize).toBeTruthy();
    });

    it("_value (private) is not undefined", () => {
      expect(lazy["_value"]).toBe(1);
    });
  });
});
