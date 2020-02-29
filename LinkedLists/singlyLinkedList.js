class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this._length = 0;
    }

    getLength = () => {
        return this._length;
    };

    getListNodeAtIndex = index => {
        let currentNode = this.head;
        let count = 0;

        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }

        return currentNode;
    };

    getLastListNode = () => {
        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        let lastNode = currentNode;

        return lastNode;
    };

    insertNodeAtBeginning = data => {
        let next = this.head;

        this.head = new ListNode(data, next);
        this._length++;

        return this.head;
    };

    insertNodeAtEnd = data => {
        let currentNode = this.head;

        if (currentNode) {
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = new ListNode(data);
        } else {
            this.head = new ListNode(data);
        }

        this._length++;
        return this.head;
    };

    insertNodeAtIndex = (data, index) => {
        if (index !== 0 && index !== this._length && this._length > 1) {
            let currentNode = this.head;
            let count = 0;

            while (count !== index - 1) {
                count++;
                currentNode = currentNode.next;
            }

            let prevNode = currentNode;
            let nextNode = prevNode.next;
            let newNode = new ListNode(data, nextNode);

            prevNode.next = newNode;
            this._length++;

            return newNode;
        }
    };

    deleteNodeAtIndex = index => {
        let deletedNode;

        if (index === 0) {
            deletedNode = this.head;
            let nextNode = deletedNode.next;
            this.head = nextNode;
        } else if (index !== this._length - 1) {

            let currentNode = this.head;
            let count = 0;

            while (count + 1 !== index) {
                count++;
                currentNode = currentNode.next;
            }

            let prevNode = currentNode;
            deletedNode = prevNode.next;
            let nextNode = deletedNode.next;

            prevNode.next = nextNode;
        }

        this._length--;
        return deletedNode;
    };

    deleteLastNode = () => {
        let currentNode = this.head;
        let nextNode = currentNode.next;

        while (nextNode.next) {
            currentNode = nextNode;
            nextNode = currentNode.next;
        }

        let deletedNode = nextNode;

        currentNode.next = null;
        this._length--;

        return deletedNode;
    };
}