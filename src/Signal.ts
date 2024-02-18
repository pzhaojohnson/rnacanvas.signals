export interface Listener {
  (): void;
}

/**
 * A signal that can be listened for and given.
 */
export class Signal {
  private listeners: Listener[] = [];

  /**
   * Adds a listener for this signal.
   */
  addListener(li: Listener): void {
    this.listeners.push(li);
  }

  /**
   * Calls all listeners for this signal
   * (i.e., that have been added).
   */
  give(): void {
    this.listeners.forEach(li => li());
  }
}
