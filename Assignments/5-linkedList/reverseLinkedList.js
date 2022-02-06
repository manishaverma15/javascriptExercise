class Node {
    constructor(element, next = null) {
        this.element = element;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(element) {
        // create new node
        let node = new Node(element);
        if (this.head === null) {
            this.head = node;
            this.size = 1;
        } else {
            let currentNode = this.head;
            console.log("current node", currentNode);
            // repeat till last node
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            this.size++;
            currentNode.next = node;
        }
    }

    returnArray() {
        let array = [];
        let currentNode = this.head;
        while (currentNode.next !== null) {
            array.push(currentNode.element);
            currentNode = currentNode.next;
        }
        array.push(currentNode.element);
        return array;
    }
    reverseLinkedList() {
        let prev = null;
        let current = this.head;
        let next = current.next;
        if (this.head === null || this.head.next === null) {
            return head;
        }
        else {
            while (next !== null) {
                current.next = prev;
                prev = current;
                current = next;
                next = next.next;

            }
            current.next = prev;
            this.head = current;
        }
    }
    deleteElement(index) {

        if (index < 0 || index > this.size) {
            return console.log("enter a valid index");
        }
        else {
            let current = this.head;
            let i = 0;
            let prev;

            // delete first element
            if (index === 0) {
                this.head = current.next
            }
            else {
                let current = this.head;
                while (i < index) {
                    prev = current;
                    console.log("prev", prev);
                    current = current.next;
                    console.log("current", current)
                    i++;

                }
                prev.next = current.next;
                console.log("after deletion", prev.next)
                this.size--;
            }
        }
    }
}
const linkedlist = new LinkedList();
linkedlist.add(30);
linkedlist.add(90);
linkedlist.add(39);
linkedlist.add(34);
linkedlist.add(36);
// linkedlist.reverseLinkedList();
linkedlist.deleteElement(3);
console.log(linkedlist.returnArray());
