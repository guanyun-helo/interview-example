const Koa = require('koa');
const app = new Koa();
const XLSX = require('xlsx')
/* 
    * read file 
    * @path sheet path
    * output the array of this sheet
*/
const readFile = async (path) => {
    return XLSX.utils.sheet_to_json(XLSX.readFile(path).Sheets['Sheet1'])
}

app.use(async ctx => {
    let res = await readFile('src/example.xlsx')
    console.log(findNextRow(res))
    ctx.body = res;
});


// suppose there are data in cells A1, A2, ..., upto A10

// so when When test function is executed, readCells will return the value of cells and writeCells will
// write the values into the sheet
// the easiest way to do this is to save the last number of row written, So just find the previous row and keep writing.
// but I think this question is supposed to look at how two-dimensional array find empty values.
// the normal way to find values in an array is to write a binary search, but the data itself is not incremental or has linear rules
// And the title says "readCells is limited to return at most 30 rows of data each time".
// so here is the function [ findNextRowGeneral && findNextRow ]


const readCells = async (path) => {
    //  return xxx
}

// Ologn
const findNextRowGeneral = async (sheet) => {
    let i = 0;
    while (sheet[i]['filling values']) {
        i++
    }
    return i
}

// Since there are up to thirty writes at a time, the number of batch writes must be the total number divided by thirty, and the remainder we get is the number of lines we want!
// The complexity of the first method depends on the size of the data, but the second method is 30/1 times more complex than the first because the remainder is a constant and the complexity of the constant is o(1)
const findNextRow = (sheet) => {
    let i = 0;
    let times = 0
    while (sheet[i] && sheet[i]['filling values'] !== 'null') {
        i += 30
        times++
    }
    while (!sheet[i]) {
        i--
    }
    return i
}



const writeCells = async (cells, sheet) => {
    let row = findNextRow(sheet)

}

async function test() {
    await writeCells(await readCells('A1:A30'))
    await writeCells(await readCells('A31:A61'))
    await writeCells(await readCells('A61:91'))
}

// test()













app.listen(3000);
