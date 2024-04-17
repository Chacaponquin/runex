export abstract class ProductParam<V> {
  abstract toParam(value: V | undefined): string;
  abstract toValue(value: string | undefined): V;
}
