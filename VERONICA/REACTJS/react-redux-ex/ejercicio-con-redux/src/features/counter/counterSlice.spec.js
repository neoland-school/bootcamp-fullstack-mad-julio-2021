import contadorReducer, {
  increment,
  decrement,
  incrementByAmount,
} from './counterSlice';

describe('counter reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(contadorReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = contadorReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = contadorReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = contadorReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
