var MinStack = function () {
    this.stack = [];
    this.min = -1;
    this.top = -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val)
    this.top = val
    if (this.stack.length == 1) {
        this.min = val
    } else if (this.min > val) {
        this.min = val
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {

};