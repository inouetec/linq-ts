import { asReadonly } from "../extensions/asReadonly";

Array.prototype.asReadonly = asReadonly;

describe("asReadonly", () => {
    test("same values", () => {
        const values: readonly number[] = [1, 2, 3];
        expect([1, 2, 3].asReadonly()).toStrictEqual(values);
    });
});