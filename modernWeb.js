var arr = [1,2,3,4,5,6,7,8,9,10];
arr = arr.filter(function(element){
    return element <= 5;
});

console.log(arr); //[ 1, 2, 3, 4, 5 ]

