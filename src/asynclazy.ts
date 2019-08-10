import { Lazy } from "./lazy";

export class AsyncLazy<T> extends Lazy<Promise<T>> {}
