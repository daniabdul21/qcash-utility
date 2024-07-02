export class Exception extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, Exception.prototype);
  }

  /**
   * It returns a string that says "Request Failed: " followed by the value of the message property
   * @returns A string that says "Request Failed: " and then the message that was passed in.
   */
  public getErrorMessage() {
    return `Request Failed: ${this.message}`;
  }
}
