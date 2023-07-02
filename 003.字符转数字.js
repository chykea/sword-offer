/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
    str = str.replace(/^\s+/g, '') // 去除开头的所有空格
    let code = str.charCodeAt(0)
    // console.log(code);
    if (code > 57 || code < 48) {
        if (code != 43 && code != 45)
            return 0
    }
    let left = 0;
    str.charAt(0) === '-' || str.charAt(0) === '+' ? left = 1 : ''
    let num = 0;
    for (let i = left; i < str.length; i++) {
        if (str.charCodeAt(i) <= 57 && str.charCodeAt(i) >= 48)
            num = num * 10 + Number(str.charAt(i))
        else
            break;
    }
    if (str.charAt(0) == '-') num = num * -1
    if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1
    if (num < Math.pow(-2, 31)) return Math.pow(-2, 31)
    return num


}
console.log(strToInt("-91283472332"));