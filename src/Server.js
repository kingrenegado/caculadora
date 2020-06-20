//alzar servidor
//1er paso requerir express
const express = require('express');
//2do paso usar express
const app = express();

const routeAdministrator = require('./RouteAdministrator');
async function sleep(ms){
    //objeto que representa terminacion o fracaso de funcion asincrona
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function conexionDB(){
    return new Promise((resolve,reject) => setTimeout(reject(new Error('La conexion no pudo ser lograda')),3000))
}

app.get('/src/:userId',(req,res) => {
    res.json(
        {
        id:req.params.userId,
        nombe: 'enrique',
        edad: 22
    }
    )
});

app.get('/src', routeAdministrator(async(req,res) => {
    //    await conexionDB();
       await sleep(4000);
}));


//puerto
var port = 8090;
app.listen(port, ()=> {
    console.log('Servidor levantado en el puerto ' +port)
})
