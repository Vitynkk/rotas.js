const http = require('http');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req,url=='/'){
        res.write('<h1>Seja Bem Vindo')
    }
    res.end()
});

servidor.listen(porta,host,()=>{console.log('Servidor rodando')});