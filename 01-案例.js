let fs = require('fs');
const { json } = require('stream/consumers');
let data = fs.readFileSync('./data.json', 'utf8')
data = JSON.parse(data)
console.log(data);

let arrman = data.filter((v) => v.gender === '男')
let arrwomen = data.filter((v) => v.gender === '女')

fs.writeFileSync('男.json', JSON.stringify(arrman))
fs.writeFileSync('女.json',JSON.stringify(arrwomen))