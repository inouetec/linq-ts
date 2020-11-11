import { any } from "./any";

export { };

declare global {
    interface Array<T> {
        /**
         * 配列の要素が存在するか、または条件を満たすかどうかを判断します。
         *
         * @template T
         * @param {Array<T>} this
         * @param {(value: T) => boolean} [func]
         * @return {*}  {boolean}
         * @memberof Array
         */
        any<T>(this: Array<T>, func?: (value: T) => boolean): boolean;
    }

    interface ReadonlyArray<T> {
        /**
         * 配列の要素が存在するか、または条件を満たすかどうかを判断します。
         *
         * @template T
         * @param {ReadonlyArray<T>} this
         * @param {(value: T) => boolean} [func]
         * @return {*}  {boolean}
         * @memberof ReadonlyArray
         */
        any<T>(this: ReadonlyArray<T>, func?: (value: T) => boolean): boolean;
    }
}

if (!Array.prototype.any) {
    Array.prototype.any = any;
}