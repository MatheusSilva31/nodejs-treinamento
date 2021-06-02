//exemplo para obter informações da url
const http = require('http')

const server = http.createServer(
    (request,response) => {

const url = new URL(request.url);


        
        response.write("<head><meta charset='UTF-8'></head>");
        response.write("<h1>Consulta de pontos </h1>");
        response.write(`<h3>${request.url}</h3>`);

        response.end();
    }
);

server.listen(3000,()=>{console.log("servidor rodando na porta 3000")});

console.log("fim do script")

//no navegador,para acessar o seridor
//localhost:3000/consulta-pontos?nome-jogador=cassio