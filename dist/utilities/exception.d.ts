export declare class Exception extends Error {
    constructor(message: string);
    /**
     * It returns a string that says "Request Failed: " followed by the value of the message property
     * @returns A string that says "Request Failed: " and then the message that was passed in.
     */
    getErrorMessage(): string;
}
