import ready from '../ready';

describe('ready()', () => {
  it('fires if readyState !== loading', () => {
    const mockFn = jest.fn();
    ready(mockFn);
    expect(mockFn).toHaveBeenCalled();
  });

  it('accepts a custom context', (done) => {
    function onReady() {
      expect(this.foo).toEqual('bar');
      done();
    }

    ready(onReady, { foo: 'bar' });
  });
});
