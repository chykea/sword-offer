/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    if (!s.length) return " "
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i)
        map.set(c, map.get(c) ? map.get(c) + 1 : 1)
    }
    let k = ' '
    try {
        map.forEach((value, key) => {
            if (value == 1) throw new Error(key)
        })
    } catch (e) {
        k = e.message
    }
    return k
};
firstUniqChar('abaccdeff')