class Node {
    constructor(data, prev, next){
        this.next = next;
        this.prev = prev;
        this.data = data;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    get isEmptyList() {
        return !!this.length;
    }

    get listHead() {
        return this.head;
    }

    insertNode(data, index) {
        if (index <= 0) return 'Invalid index';

        if(!this.isEmptyList){
            this.length++;
            return this.head = new Node(data, null, null);
        }

        if(this.length >= index) {
            const current = this.getDataAtIndex(index);

            const node = new Node(data, current.prev, current);
            current.prev.next = node;
            current.prev = node;
            this.length++;
            return node;
        }

        return this.pushNode(data);
    }

    pushNode(data) {
        let current = this.head;

        while(current.next) {
            current = current.next;
        }

        const node = new Node(data, current, null)
        current.next = node;
        this.length++;
        return node;
    }

    removeNode(index) {
        if (index <= 0) return 'Invalid index';

        if(!this.isEmptyList) {
            return 'Already Empty List!'
        }

        if(index < this.length) {
            const current = this.getDataAtIndex(index);

            current.prev.next = current.next;
            current.next.prev = current.prev;
            this.length--;
            return 'Deleted successfully';
        }

        return this.popNode();
    }

    popNode() {
        if(this.length !== 1) {
            let current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.prev.next = null;
        } else {
            this.head = null;
        }

        this.length--;
        return 'Popped out successfully';
    }

    getDataAtIndex(index) {
        if(index > 0 && index < this.length + 1) {
            let i = 1;
            let current = this.head;

            while(i !== index) {
                current = current.next;
                i++;
            }

            return current;
        }

        return `Invalid index. Specify index at range from 1 to ${this.length}`;
    }
}

const doublyLinkedList = new DoublyLinkedList();
console.log(doublyLinkedList.insertNode('first Node', 7));
console.log(doublyLinkedList.insertNode('second Node', 7));
console.log(doublyLinkedList.insertNode('third Node', 7));
console.log(doublyLinkedList.insertNode('fourth Node', 7));
console.log(doublyLinkedList.insertNode('fifth Node', 4));
console.log(doublyLinkedList.getDataAtIndex(5));
console.log(doublyLinkedList.removeNode(4));
console.log(doublyLinkedList.removeNode(4));
console.log(doublyLinkedList.removeNode(4));
console.log(doublyLinkedList.removeNode(4));
console.log(doublyLinkedList.removeNode(4));
console.log(doublyLinkedList.removeNode(4));
