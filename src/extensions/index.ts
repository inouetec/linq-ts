import { any } from "./any";
import { asReadonly } from "./asReadonly";
import { toArray } from "./toArray";

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
        /**
         * 現在の配列の読み取り専用の ReadOnlyArray<T> を返します。
         *
         * @param {Array<T>} this
         * @return {*}  {ReadonlyArray<T>}
         * @memberof Array
         */
        asReadonly<T>(this: Array<T>): ReadonlyArray<T>;
        /**
         * 要素を配列に変換します。
         *
         * @template T
         * @param {Array<T>} this
         * @return {*}  {Array<T>}
         * @memberof Array
         */
        toArray<T>(this: Array<T>): Array<T>;
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
        /**
         * 現在の配列の読み取り専用の ReadOnlyArray<T> を返します。
         *
         * @param {ReadonlyArray<T>} this
         * @return {*}  {ReadonlyArray<T>}
         * @memberof ReadonlyArray
         */
        asReadonly<T>(this: ReadonlyArray<T>): ReadonlyArray<T>;
        /**
         * 要素を配列に変換します。
         *
         * @template T
         * @param {ReadonlyArray<T>} this
         * @return {*}  {Array<T>}
         * @memberof ReadonlyArray
         */
        toArray<T>(this: ReadonlyArray<T>): Array<T>;
    }
}

if (!Array.prototype.any) {
    Array.prototype.any = any;
}

if (!Array.prototype.asReadonly) {
    Array.prototype.asReadonly = asReadonly;
}

if (!Array.prototype.toArray) {
    Array.prototype.toArray = toArray;
}