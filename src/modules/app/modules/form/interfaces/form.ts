import { Dimension } from "./dimension";

export interface FormProps<T> {
  className?: string;
  onChange(value: T): void;
  dimension?: Dimension;
  value: T;
  id?: string;
}
