export function any<T>(this: Array<T> | ReadonlyArray<T>, func?: (value: T) => boolean): boolean {
    return func ? this.some(v => func(v)) : this.length > 0;
}
