const http = require('http');
const fs = require('fs');

const app = http.createServer((request, response) => {
  // if (request.url === '/js/index.js') {

  // try catch
  // try 里面 放正常的代码
  // catch 里面放 出现错误之后 要处理的代码
  try {
    const file = fs.readFileSync(`./public${request.url}`);
    response.end(file);
  } catch (error) {
    response.statusCode = 404;
    response.end('not found');
  }
});
app.listen(8008, () => {
  console.log(`8008服务开启成功`);
});