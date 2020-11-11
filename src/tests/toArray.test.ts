import { toArray } from "../extensions/toArray";

Array.prototype.toArray = toArray;

describe("toArray", () => {
    test("same type", () => {
        const values: readonly number[] = [1, 2, 3];
        expect(values.toArray()).toBeInstanceOf(Array);
    });

    test("same values", () => {
        const values: readonly number[] = [1, 2, 3];
        expect(values.toArray()).toStrictEqual([1, 2, 3]);
    });
});