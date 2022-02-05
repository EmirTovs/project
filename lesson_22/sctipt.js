

// Копирование объекта

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

// console.log(newObj);
// console.log(obj);


function copy(cloneObj) {

    let newObj = {}

    let key;

    for (key in cloneObj) {
        newObj[key] = cloneObj[key]
    }
    return newObj

}


const add = {
    a: 1,
    b: 2
}

const objAss = Object.assign({}, obj)

objAss.a = 2

// console.log(objAss);


// Копирование массива


const olbArray = ['a', 'b', 'c']

const newArray = olbArray.slice()

newArray[1] = 'w'

// console.log(olbArray);

// console.log(newArray);



// ######### Оператор Spread ############

// const video = ['youtube', 'vimeo', 'rutube'],
//         blogs = ['wordpress', 'livejournal', 'maxim'],
//         internet = [...video, ...blogs, 'vk', 'facebook']

// console.log(internet);


const   video = {
            youtube: true, 
            vimeo: true, 
            rutube: false,
            a: {
                b: true
            }
        },
        blogs = { 
            wordpress: true,
            livejournal: true, 
            maxim: true
        },
        internet = {
            ...video, 
            ...blogs, 
            vk: true, 
            facebook: false
        };
       

console.log(internet);