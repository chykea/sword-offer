var CQueue = function () {
    this.stack1 = []
    this.stack2 = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.stack1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.stack2.length) return this.stack2.pop()
    if (!this.stack1.length) return -1
    while (this.stack1.length) {
        let tmp = this.stack1.pop()
        this.stack2.push(tmp)
    }
    return this.stack2.pop()

};