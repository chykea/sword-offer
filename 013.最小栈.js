var MinStack = function () {
    this.stack = [];
    this.minStack = []
    this.topPointer = -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val)
    this.topPointer++;
    if (!this.minStack.length) { // 如果当前最小栈不为空
        this.minStack.push(val)
    } else if (val > this.minStack[this.minStack.length - 1]) {
        this.minStack.push(this.minStack[this.minStack.length - 1])
    } else {
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
    this.minStack.pop()
    this.topPointer--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.topPointer]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.minStack[this.topPointer]
};
let minstack = new MinStack();

minstack.push(-2)
minstack.push(0)
minstack.push(-3)

// console.log(minstack);
console.log(minstack.min());
// minstack.pop()
// console.log(minstack.top());

// console.log(minstack.min());