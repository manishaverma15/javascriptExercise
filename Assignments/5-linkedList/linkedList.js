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
    }
    add(element) {
        // create new node
        let node = new Node(element)
        if (this.head === null) {
            this.head = node;
        }
        else {
            let currentNode = this.head;
            console.log("current node", currentNode)
            // repeat till last node
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
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
        return array;
    }

     addElementAtLocation(element,index){
         if(index <0 || index > size){
             return console.log("enter a valid index");
         }
         else{
             let node =new Node(element);
             let currentNode,prevNode;
             currentNode = this.node;
             if(index === 0){
                 node.next = this.head;
                 this.head = node;
             }
             else{
                 
             }
         }

     }
}
const linkedlist = new LinkedList();
linkedlist.add(30);
linkedlist.add(90);
linkedlist.add(39);
linkedlist.add(34);
linkedlist.add(76);

console.log(linkedlist.returnArray());

// console.log("head", linkedlist.head)