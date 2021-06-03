const express = require('express');

console.log(`express: ${typeof(express)} | constructor${express.constructor.name}`);

const app = express();

app.listen(3000,()=>{console.log("a aplicação esta rodando na porta 3000")})