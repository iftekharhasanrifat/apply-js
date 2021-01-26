function factorial(num) {
    var fact = 1;
    var i = 1;
    while (i <= num) {
        fact = fact * i;
        i++;
    }
    return fact;
}
var result = factorial(5);
console.log(result)