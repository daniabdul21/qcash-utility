export declare class LinkedList<T> {
    private head;
    private tail;
    /**
     * If the head of the list is null, then the list is empty
     * @returns The head of the linked list.
     */
    isEmpty(): boolean;
    /**
     * "If the list is empty, set the head and tail to the new node, otherwise append the new node to the
     * end of the list."
     *
     * The first thing we do is create a new node. We then check if the list is empty. If it is, we set the
     * head and tail to the new node. If it isn't, we call the appendToTheEndOfTheList function
     * @param {T} value - T - the value to be added to the list
     * @returns The LinkedList
     */
    append(value: T): LinkedList<T>;
    /**
     * We create an empty array, then we loop through the linked list and push each value into the array,
     * and then we return the array.
     * @returns An array of the values in the linked list.
     */
    toArray(): T[];
    /**
     * This function takes an array of values, and for each value in the array, it appends it to the linked
     * list.
     * @param {T[]} values - T[]
     * @returns The LinkedList object.
     */
    fromArray(values: T[]): LinkedList<T>;
    /**
     * If the tail exists, set the next property of the tail to the node, then set the tail to the node.
     * @param node - INode<T> - the node that we want to add to the end of the list
     */
    private appendToTheEndOfTheList;
    /**
     * It creates a new node with the given value and a null next pointer
     * @param {T} value - T - the value of the node
     * @returns A new node with the value and next property set to null.
     */
    private forgeNode;
}
