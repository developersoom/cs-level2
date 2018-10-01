/*
var students = [];
students.push({이름:'윤인성', 국어: 87, 수학: 98, 영어:88, 과학:52});
students.push({이름:'dd', 국어: 87, 수학: 98, 영어:88, 과학:52});
students.push({이름:'ㅇ마ㅓ림', 국어: 87, 수학: 98, 영어:88, 과학:52});
students.push({이름:'ㄴ이라ㅓ', 국어: 87, 수학: 98, 영어:88, 과학:52});
students.push({이름:'ㄴ아림ㄴㅇㄹ', 국어: 87, 수학: 98, 영어:88, 과학:52});

for(var i in students){
    students[i].getSum = function (){
        return this.국어 + this.수학 + this.영어 + this.과학;
    };
    students[i].getAverage = function (){
        return this.getSum()
    };
}

var output = '이름\t총점\t평균\n';
for(var i in students){
    with(students[i]){
        output += 이름 + '\t' + getSum() + '\t' + getAverage() + '\n';
    }   
}

console.log(output)
*/

function makeStudents(name, korean, math, english, science){
    var willReturn = {
        이름: name, 
        국어: korean, 
        수학: math,
        영어: english, 
        과학: science,

        getSum: function (){
            return this.국어 + this. 수학 + this.영어 + this.과학;
        },

        getAverage: function (){
            return this.getSum()/4;
        },

        toString: function(){
            return this.이름 + '\t' + this.getSum() + '\t' +this.getAverage();
        }
    };
    return willReturn;
}