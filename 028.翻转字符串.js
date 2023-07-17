var reverseWords = function (s) {
    let str = s.trim().split(" ");
    console.log(str);
    str = str.filter(s => s != '')
    console.log(str);
    return str.reverse().join(' ')
};
reverseWords('a good   example')