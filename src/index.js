module.exports = function reverse(n) {
    if (n < 0) {
        n * (-1);
        return Number.parseInt(n.toString().split('').reverse().join(''));
    } else {
        return Number.parseInt(n.toString().split('').reverse().join(''));
    }
}
