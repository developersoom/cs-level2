function measureCircleArea(r) {
    if (arguments.length !== 1) {
        console.log('error: 값이 1개가 아닙니다.');
    } else if (isNaN(r)) {
        console.log('error: 값이 숫자가 아닙니다.');
    } else {
        let p = Math.PI;
        let circleArea = p * Math.pow(r, 2);
        console.log('원의 넓이는 = ' + circleArea);
    }
}

measureCircleArea(4);


function measureSquareArea(w, l) {
    if (arguments.length != 2) {
        console.log('error: 값이 2개(가로,세로)가 아닙니다.');
    } else if (isNaN(w) || isNaN(l)) {
        console.log('값이 숫자가 아닙니다.');
    } else {
        let squareArea = w * l
        console.log('사각형의 넓이는 = ' + squareArea);
    }
}

measureSquareArea(3, 1);

function measureTrapezoidArea(b1, b2, h) {
    if (arguments.length != 3) {
        console.log('error: 값이 3개(윗변, 아랫변, 높이)가 아닙니다.');
    } else if (isNaN(b1) || isNaN(b2) || isNaN(h)) {
        console.log('error: 값이 숫자가 아닙니다.');
    } else {
        let trapezoidArea = ((b1 + b2) / 2) * h;
        console.log('사다리꼴의 넓이는 = ' + trapezoidArea);
    }
}

measureTrapezoidArea(10, 14, 10);

function measureCylinderArea(r, h) {
    if (arguments.length != 2) {
        console.log('error: 값이 2개(반지름, 높이)가 아닙니다.');
    } else if (isNaN(r) || isNaN(h)) {
        console.log('error: 값이 숫자가 아닙니다.');
    } else {
        let p = Math.PI
        let cylinderArea = (2 * p * Math.pow(r, 2)) + (h * 2 * p * r);
        console.log('원기둥의 넓이는 = ' + cylinderArea);
    }
}

measureCylinderArea(4,10);
