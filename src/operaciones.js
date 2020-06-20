const Operaciones = {}
function suma(a, b){
    return a+b;
}
function resta(a, b){
    return a-b;
}
function multiplicacion(a, b){
    return a*b;
}

function division(a, b){
    return a/b;
}
module.exports = Operaciones;

Operaciones.suma=suma;
Operaciones.resta=resta;
Operaciones.multiplicacion=multiplicacion;
Operaciones.division=division;