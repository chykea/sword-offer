/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    let str = s.substring(0, n)
    return s.split('').splice(n).join('') + str
};

console.log(reverseLeftWords('abcdefg', 2));