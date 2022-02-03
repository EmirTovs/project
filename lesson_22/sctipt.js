



const obj = {
    a: 4,
    b: 2,
    c: {
        x: 1,
        y: 2
    }
}

const newObj = copy(obj)

newObj.a = 3;
newObj['c'].x = 3;

console.log(newObj);
console.log(obj);


function copy(cloneObj) {

    let newObj = {}

    let key;

    for (key in cloneObj) {
        newObj[key] = cloneObj[key]
    }
    return newObj

}


