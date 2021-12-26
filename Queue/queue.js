class Queue {
    // initialize the queue
    constructor(length = 1) {
        this.queueList = [];
        this.head = 1;
        this.tail = 1;
        this.maxLength = length;
    }

    get queue() {
        return this.queueList;
    }

    get queueHead() {
        return this.head;
    }

    get queueTail() {
        return this.tail;
    }

    // check if the queue is empty
    isEmptyQueue() {
        return this.head === this.tail;
    }

    next(parameter) {
        if(parameter === this.maxLength) {
            return 1;
        }

        return parameter + 1;
    }

    // add element to the queue
    enqueue(element) {
        if(this.next(this.tail) === this.head) {
            return `Warning queue overflow! Queue's max length is ${this.maxLength}.`;
        }

       this.queueList[this.tail - 1] = element;
       this.tail = this.next(this.tail);
       return this.queueList;
    }

    // remove the head element from the queue
    dequeue() {
        if(this.emptyQueue()){
            return `Warning queue underflow! Queue is already empty.`;
        }

        this.queueList[this.head - 1] = '';
        this.head = this.next(this.head);
        return this.queueList;
    }
}

const queue = new Queue(5);
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));
console.log(queue.queueHead)
console.log(queue.queueTail)
console.log(queue.dequeue());
console.log(queue.enqueue(5));
console.log(queue.dequeue());
console.log(queue.enqueue(5));
console.log(queue.dequeue());
console.log(queue.enqueue(10));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.enqueue(10));
console.log(queue.queueHead)
console.log(queue.queueTail)
