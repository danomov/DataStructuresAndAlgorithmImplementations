class Stack {
    // initialize the stack
    constructor(length = 1) {
        this.stackList = [];
        this.maxLength = length;
        this.topIndex = 0;
    }

    // check if the stack is empty
    emptyStack() {
        return !this.topIndex;
    }

    // add element to the stack
    push(element) {
        if(this.len <= this.maxLength - 1) {
            this.topIndex = this.topIndex + 1;
            return this.stackList = [...this.stackList, element];
        }

        return `Warning stack overflow! Stack's max length is ${this.maxLength}.`
    }

    // remove the last element from the stack
    pop() {
        if(!this.emptyStack()) {
            this.topIndex = this.topIndex - 1;
            return this.stackList = this.stackList.slice(0, this.len - 1);
        }

        return `Warning stack underflow! Stack is already empty.`
    }

    get stack() {
        return this.stackList;
    }

    get len() {
        return this.stack.length;
    }

    get top() {
        return this.topIndex;
    }
}

const stack = new Stack(4);
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.push(5));
console.log(stack.len)
console.log(stack.top);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.top);
console.log(stack.emptyStack());
console.log(stack.stack);
