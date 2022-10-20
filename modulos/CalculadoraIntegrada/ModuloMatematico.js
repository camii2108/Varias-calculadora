function sumar(x1,x2){
    return (x1  + x2);
}
module.exports = sumar;

function restar(x1,x2){
    return (x1 - x2);
}
exports.restar = restar;

function multiplicar(x1,x2){
    if( x1==0 || x2==0) {
        return"nose puede multiplicar por 0";
    };
    return (x1 * x2);
}
console.log(multiplicar(2,0));
exports.multiplicar = multiplicar;

function dividir(x1,x2){
    if( x1==0 || x2==0){
        return "No se puede multiplicar por 0";
    };
    return (x1 / x2);
}
exports.dividir = dividir;