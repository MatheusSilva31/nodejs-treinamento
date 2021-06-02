

const http = require ('http');

http.createServer(
    (request,response) => {
        //Request.url; //tenho a string da url da requisição

        response.writeHead(200/*status sucesso*/, {'content-Type' : 'text/html'} )
        
        response.write('<head><meta charset="UTF-8"></head>');
        if(Request.url === '/'){
            response.write('<h1>Pagina do Matheus</h1>');
            response.write('<ul>');
            response.write('<li><a href=/">home</a></li');
            response.write('<li><a href=/">artigos  </a></li');
            response.write('</ul>');
         
        }


        response.write()

    }
);
server.listen(3000,()=>{console.log("o servidor esta rodando na porta 3000")});