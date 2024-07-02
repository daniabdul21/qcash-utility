/**
 * Helper to omit properties of a type.
 *
 * @template T - The original type from which properties will be omitted.
 * @template K - The keys of the properties to be omitted from the original type.
 * @param {T} obj - The object of the original type.
 * @param {K} key - The keys to omit from the original type.
 * @returns {Omit<T, K>} A new type with specified properties omitted.
 *
 * @example
 * // Usage example:
 * type Person = {
 *   name: string;
 *   age: number;
 *   address: string;
 * };
 *
 * // Omit 'address' property from the 'Person' type
 * type WithoutAddress = OmitProperties<Person, 'address'>;
 *
 * const personWithoutAddress: WithoutAddress = {
 *   name: 'John',
 *   age: 30,
 * };
 */
export type OmitProperties<T, K extends keyof T> = Omit<T, K>;
