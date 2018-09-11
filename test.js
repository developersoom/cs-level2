function getPrimeNumber(n) {
    var emptyArr = [];
    for (let i = n - 1; i >= 1; i--) {
        if (n % i === 0) {
            emptyArr.push(n);
            emptyArr.push(i);
        }
    }
    let arr = [...new Set(emptyArr)];
    return arr;
}

let firstNumber = getPrimeNumber(10);
let secondNumber = getPrimeNumber(5);
let cd = firstNumber.filter(function (val) {
    return secondNumber.indexOf(val) != -1;
});

var gcd = cd[0];

for (i=0; i<=gcd;i++){
    if (cd[i]>gcd) {
        var gcd=cd[i];
    }
}
console.log(gcd);