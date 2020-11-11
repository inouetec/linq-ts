export function asReadonly<T>(this: Array<T> | ReadonlyArray<T>): ReadonlyArray<T> {
    return this as ReadonlyArray<T>;
}