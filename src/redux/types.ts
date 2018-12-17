export interface Action<T> {
  type: T;
}
export interface PayloadedAction<T, P> {
  type: T;
  payload: P;
}
export type AnyAction = Action<string> | PayloadedAction<string, any>;
