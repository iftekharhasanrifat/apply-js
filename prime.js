function isPrime(n){
    for(var i=2;i<n;i++){
        if(n%i==0){
            return "Not a prime number";
        }
    }
    return "Prime number";
}
var result =  isPrime(57);
console.log(result);