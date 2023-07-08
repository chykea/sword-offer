var MaxQueue = function () {
    this.queue = [];
    this.max_queue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
    return this.max_queue.length ? this.max_queue[0] : -1
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
    this.queue.push(value)
    while (this.max_queue.length && this.max_queue[this.max_queue.length - 1] < value) {
        this.max_queue.pop()
    }
    this.max_queue.push(value)

};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
    if (!this.queue.length) return -1
    const ele = this.queue.shift()
    if (ele == this.max_queue[0]) this.max_queue.shift()
    return ele
};

let max = new MaxQueue()
max.push_back(1)
max.push_back(2)
console.log(max);
console.log(max.max_value());
console.log(max.pop_front());
console.log(max.max_value());