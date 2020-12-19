import { any } from "../extensions/any";

Array.prototype.any = any;

test("any_test", () => {
    expect([1, 2, 3].any()).toBe(true);
});

test("any_empty_test", () => {
    expect([].any()).toBe(false);
});

test("any_filter_match_test", () => {
    expect([1, 2, 3].any(v => v > 1)).toBe(true);
});

test("any_filter_unmatch_test", () => {
    expect([1, 2, 3].any(v => v < 0)).toBe(false);
});