import { Signal } from './Signal';

describe('Signal class', () => {
  describe('give method', () => {
    it('calls all listeners for the signal', () => {
      let signal = new Signal();

      let listeners = [jest.fn(), jest.fn(), jest.fn(), jest.fn(), jest.fn()];

      listeners.forEach(li => signal.addListener(li));

      listeners.forEach(li => expect(li).not.toHaveBeenCalled());

      signal.give();

      listeners.forEach(li => expect(li).toHaveBeenCalledTimes(1));
    });

    it('does nothing when there are no listeners for the signal', () => {
      let signal = new Signal();

      expect(() => signal.give()).not.toThrow();
    });
  });
});
