var data = [{
        'name': '데이터베이스',
        'grade': 'A',
        'credit': 3,
        'major': false
    },
    {
        'name': '교양영어',
        'grade': 'B+',
        'credit': 2,
        'major': true
    },
    {
        'name': '철학',
        'grade': 'B+',
        'credit': 1,
        'major': false
    },
];

// count major subjects
/*function isMajor(data) {
    let major = 0;
    for (let key in data) {
        if (data[key].major) {
            major += 1;
        }
    }
    return major;
}
*/

// calculate credits
function calculateCredits(data) {
    let credits = 0;
    let majorCredits = 0;
    for (let key in data) {
        credits += data[key].credit;
        if (data[key].major) {
            majorCredits += data[key].credit;
        }
    }
    return [credits, majorCredits];
}

// calculate points with 4.0 scale
function calculatePoints(data) {
    let grossPoints = 0;
    let grossMajorPoints = 0;
    tableFourPointZero = {
        'A+': 4.3,
        'A': 4.0,
        'A-': 3.7,
        'B+': 3.3,
        'B': 3.0,
        'B-': 2.7,
        'C+': 2.5,
        'C': 2.0,
        'C-': 1.7,
        'D+': 1.5,
        'D': 1.0,
        'D-': 0.7,
        'F': 0,
    }

    for (let i in data) {
        for (let key in data[i]) {
            if (key === 'grade') {
                grossPoints += (data[i].credit * tableFourPointZero[data[i][key]]);
                if (data[i].major) {
                grossMajorPoints += data[i].credit * tableFourPointZero[data[i][key]];
                }
            }

        }
    }
    return [grossPoints, grossMajorPoints];
}


console.log(calculatePoints(data));

// let credits = calculateCredits(data);
// let points = calculatePoints(data);
// let grossCredits = credits[0];
// let majorCredits = credits[1];
// let grossPoints = points[0];
// let majorPoints = points[1];

// console.log((grossCredits * grossPoints) / grossCredits);


/*
let standardScale = 4.3
let gpa = (grossPoints*grossCredts)/standardScale;
let majorGpa = (majorPoints*majorPoints)/standardScale;

console.log( '4.5 기준: 총 평점 = ' + (gpa*4.5).toFixed(1) + ' 전공 평점 = ' + (majorGpa*4.5).toFixed(1) + '\n' +
        '4.3 기준: 총 평점 = ' + gpa.toFixed(1) + ' 전공 평점 = ' + majorGpa.toFixed(1) + '\n' +
        '이수 학점: ' + grossCredts+ '\n' +
        '전공 이수 학점: ' + grossPoints)
        */