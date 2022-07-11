import pipe from './pipe';

describe('pipe', () => {
  const addOne = (n: number) => n + 1;
  const timesTwo = (n: number) => n * 2;

  it('pipes the functions with correct order', () => {
    const piped = pipe(timesTwo, addOne);

    expect(piped(2)).toBe(5);
  });

  it('pipes many functions', () => {
    const piped = pipe(timesTwo, addOne, timesTwo, timesTwo, addOne);

    expect(piped(2)).toBe(21);
  });
});
