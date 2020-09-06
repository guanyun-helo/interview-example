function f(a, y) {
    let t = false;
    a.forEach((x) => {
        const u = x.id;
        if (u !== y) t = true;
    });
    return t;
}

// so a is an array
// y is some id (user id or post id something like this)
// find id in array a
// if exist return true and if not exist also return true

const testA = [{id: "123"},{id: "223"},{id: "323"},{id: "423"},{id: "523"}]

const testCase1 = '123'
const testCase2 = '623'

// testCase1 is in testA but return true
console.log(f(testA,testCase1))
// testCase1 is not in testA but also return true
console.log(f(testA,testCase2))

// so the right method is like this ?
// finding y if exist in a
function findId(array, id) {
    return array.find((item) => item.id === id) ? true : false
}