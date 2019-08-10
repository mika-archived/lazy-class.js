type ValueCreator<T> = () => T;

export class Lazy<T> {
  private readonly _factory: ValueCreator<T>;
  private _value: T | undefined = undefined;
  private _initialized = false;

  public constructor(factory: ValueCreator<T>) {
    this._factory = factory;
  }

  public get value(): T | undefined {
    if (!this._initialized) {
      this._initialized = true;
      this._value = this._factory();
    }

    return this._value;
  }

  public get isValueInitialize(): boolean {
    return this._initialized;
  }
}
