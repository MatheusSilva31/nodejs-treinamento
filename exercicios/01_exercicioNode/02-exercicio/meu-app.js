const http = require('http');
const fs = require('fs');

const servidor = http.createServer((request, response) =>{

    let arquivo = "";


    console.log(request.url)
    if (request.url === '/') {
        arquivo = 'index.html';
    } else if (request.url === '/pag_2') {
        arquivo = 'pag_2.html';
    } else if (request.url === '/pag_3') {
        arquivo =  'pag_3.html';
    } else {
        arquivo = 'PagErro.html'
    }
   




    if(fs.existsSync(arquivo)){
        fs.readFile(arquivo,(erro, pagina)=>{
            if(erro){
                throw erro;
            }else {
                response.writeHead(200, {'Content-Type': 'text/html'});

                response.write(pagina);
                response.end();
            }

        });

    }else{
        response.writeHead(500, {'Content-Type': 'text/html'});
        response.write(`pagina ${pagina} não encontrada...`);
        response.end();
    }


    
});

 servidor.listen(3000, ()=> {console.log("Servidor está no ar, rodando  na porta 3000")});




