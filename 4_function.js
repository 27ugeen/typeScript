var add = function (a, b) { return a + b; };
var toUpperCace = function (str) { return str.trim().toUpperCase(); };
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, b: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty: ', position());
console.log('Two params: ', position(10, 15));
