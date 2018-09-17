// 객체 실습1

const widget = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": {
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}


const numberKeys = [];
for (let key in widget) {
    const value = widget[key];
    if (typeof value === 'object') {
        for (let key2 in value) {
            const value2 = value[key2];
            if (typeof value2 === 'number') {
                numberKeys.push(key2);
            }
        }
    }
}
console.log(numberKeys);


const valueArr = [];
for (let value in widget) {
    if (typeof widget[value] === 'object') {
        for (let value2 in widget[value]) {
            if (typeof widget[value][value2] === 'number') {
                valueArr.push(value2);
            }
        }
    }
}
console.log(valueArr);



// better solution (from Head & Kaka)

/*
var result = [];
for (v in widget) {
   if (typeof widget[v] === 'object') {
       for (x in widget[v]) {
           if (typeof widget[v][x] === 'number') {
               result.push(x)
           }
       }
   }
}
*/


// better solution (from Torco & besense)_ recursive
/*
const new_arr = [];

function makeArr(obj){
    for(const key in obj){
        (typeof obj[key] === 'object' || typeof obj[key] === 'array') ? makeArr(obj[key]) : typeof obj[key] === 'number' ? new_arr.push(key) : '';
    }
    return new_arr;
}
*/