// Methods
// add(element)
// insertAt(element,location)
// removeFrom(location)
// removeElement(element)

// Add element
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

    addElementAtLocation(element, index) {
        if (index < 0 || index > this.size) {
            return console.log("enter a valid index");
        } else {
            let node = new Node(element);
            let currentNode;
            currentNode = node;
            if (index === 0) {
                node.next = this.head;
                this.head = node;
                this.size++;

            } else {
                currentNode = this.head;
                let i = 1;
                while (i < index) {
                    currentNode = currentNode.next;
                    i++;
                }
                node.next = currentNode.next;
                currentNode.next = node;
                this.size++;
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
linkedlist.addElementAtLocation(45, 4);


console.log(linkedlist.returnArray());

