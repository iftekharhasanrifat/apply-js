function factorial(number) {
    var fact = 1;
    for (var i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}

var result = factorial(5);
console.log(result);