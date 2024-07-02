interface INode<T> {
  value: T;
  next: INode<T> | null;
}

export class LinkedList<T> {
  private head: INode<T> | null = null;
  private tail: INode<T> | null = null;

  /**
   * If the head of the list is null, then the list is empty
   * @returns The head of the linked list.
   */
  public isEmpty() {
    return !this.head;
  }

  /**
   * "If the list is empty, set the head and tail to the new node, otherwise append the new node to the
   * end of the list."
   *
   * The first thing we do is create a new node. We then check if the list is empty. If it is, we set the
   * head and tail to the new node. If it isn't, we call the appendToTheEndOfTheList function
   * @param {T} value - T - the value to be added to the list
   * @returns The LinkedList
   */
  public append(value: T): LinkedList<T> {
    const node = this.forgeNode(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
      return this;
    }

    this.appendToTheEndOfTheList(node);
    return this;
  }

  /**
   * We create an empty array, then we loop through the linked list and push each value into the array,
   * and then we return the array.
   * @returns An array of the values in the linked list.
   */
  public toArray(): T[] {
    const result: T[] = [];

    let node = this.head;

    while (node) {
      result.push(node.value);
      node = node.next;
    }

    return result;
  }

  /**
   * This function takes an array of values, and for each value in the array, it appends it to the linked
   * list.
   * @param {T[]} values - T[]
   * @returns The LinkedList object.
   */
  public fromArray(values: T[]): LinkedList<T> {
    values.forEach((value) => this.append(value));
    return this;
  }

  /**
   * If the tail exists, set the next property of the tail to the node, then set the tail to the node.
   * @param node - INode<T> - the node that we want to add to the end of the list
   */
  private appendToTheEndOfTheList(node: INode<T>) {
    // @ts-ignore
    this.tail.next = node;
    this.tail = node;
  }

  /**
   * It creates a new node with the given value and a null next pointer
   * @param {T} value - T - the value of the node
   * @returns A new node with the value and next property set to null.
   */
  private forgeNode(value: T): INode<T> {
    return { value, next: null };
  }
}
