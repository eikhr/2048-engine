type SameTypeFn<T> = (arg: T) => T;

const pipe = <T>(...fns: SameTypeFn<T>[]): SameTypeFn<T> =>
  fns.reduce(
    (composition, fn) => (arg) => fn(composition(arg)),
    (arg) => arg
  );

export default pipe;
