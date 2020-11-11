export function toArray<T>(this: Array<T> | ReadonlyArray<T>): Array<T> {
    return this.concat();
}