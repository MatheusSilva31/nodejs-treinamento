const http = require('http')

const server = http.createServer(
    (request,response) => {
        response.write("<head><meta charset='UTF-8'></head>");
        response.write("<h1>olá server ! </h1>");
        response.end();
    }
);

server.listen(3000,()=>{console.log("servidor rodando na porta 3000")});

console.log("fim do script")

//no navegador,para acessar o seridor
//localhost:3000