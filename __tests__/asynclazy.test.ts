import { AsyncLazy } from "../src/asynclazy";

const fetch = (value: number) => new Promise<number>((resolve, _) => resolve(++value));

describe("AsyncLazy<T>", () => {
  let lazy: AsyncLazy<number>;

  describe("before initialize", () => {
    let i = 0;

    beforeAll(() => {
      lazy = new AsyncLazy<number>(async () => await fetch(i));
    });

    it("isValueInitialize returns false", () => {
      expect(lazy.isValueInitialize).toBeFalsy();
    });
  });

  describe("after initialize (called value)", () => {
    let i = 0;

    beforeAll(() => {
      lazy = new AsyncLazy<number>(async () => await fetch(i));
    });

    it("initialize once", async () => {
      expect(lazy.value).resolves.toBe(1);
      expect(lazy.value).resolves.toBe(1);
    });

    it("value returns Promise", () => {
      expect(lazy.value).toBeInstanceOf(Promise);
    });

    it("isValueInitialized returns true", () => {
      expect(lazy.isValueInitialize).toBeTruthy();
    });
  });
});
