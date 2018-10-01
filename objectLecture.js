const healthObj = {
    name: "달리기",

    lastTime: "PM10:12",

    showHealth: function () {
        console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");
        setTimeout(()=> {
            console.log('잠시 후 프린트');
            this.printMsg();
        }, 2000);
    },
    printMsg() {

        console.log('print');
    }
}

healthObj.showHealth();