const data = [{
    "id": 1,
    "name": "Yong",
    "phone": "010-0000-0000",
    "type": "sk",
    "childnode": [{
        "id": 11,
        "name": "echo",
        "phone": "010-0000-1111",
        "type": "kt",
        "childnode": [{
                "id": 115,
                "name": "hary",
                "phone": "211-1111-0000",
                "type": "sk",
                "childnode": [{
                    "id": 1159,
                    "name": "pobi",
                    "phone": "010-444-000",
                    "type": "kt",
                    "childnode": [{
                            "id": 11592,
                            "name": "cherry",
                            "phone": "111-222-0000",
                            "type": "lg",
                            "childnode": []
                        },
                        {
                            "id": 11595,
                            "name": "solvin",
                            "phone": "010-000-3333",
                            "type": "sk",
                            "childnode": []
                        }
                    ]
                }]
            },
            {
                "id": 116,
                "name": "kim",
                "phone": "444-111-0200",
                "type": "kt",
                "childnode": [{
                    "id": 1168,
                    "name": "hani",
                    "phone": "010-222-0000",
                    "type": "sk",
                    "childnode": [{
                        "id": 11689,
                        "name": "ho",
                        "phone": "010-000-0000",
                        "type": "kt",
                        "childnode": [{
                                "id": 116890,
                                "name": "wonsuk",
                                "phone": "010-000-0000",
                                "type": "kt",
                                "childnode": []
                            },
                            {
                                "id": 1168901,
                                "name": "chulsu",
                                "phone": "010-0000-0000",
                                "type": "sk",
                                "childnode": []
                            }
                        ]
                    }]
                }]
            },
            {
                "id": 117,
                "name": "hong",
                "phone": "010-0000-0000",
                "type": "lg",
                "childnode": []
            }
        ]
    }]
}]

const arr = [];
let answer = 0;

function isTypeSk(obj) {
    for (let key in obj) {
        const value = obj[key];
        if (value === 'sk') {
            arr.push(obj.name);
        } else if (typeof value === 'object') {
            isTypeSk(value);
        }
    }
    return arr;
}

answer = isTypeSk(data);
console.log(answer);



//배열 특성 확인하기 (from Vanh)

/*
function getNamesInSpecificType(dataArr, typeToSearch = "sk", resultArr = []) {
    for (let item of dataArr) {
        if (typeof item === 'object') {
            let dataObj = item;
            if (dataObj.type === typeToSearch) {resultArr.push(dataObj.name);}
            if (dataObj.childnode.length > 0) {
                resultArr.concat(
                    getNamesInSpecificType(dataObj.childnode, typeToSearch, resultArr)
                );
            }
        }
    }
    return resultArr;
}

getNamesInSpecificType(dataArr, 'kt');
*/