
var metodo = {};

// Metodo Setup
metodo.setup = function() {
    app.showN = false;
    app.showTeclado = true;
}

metodo.run = function() {
    app.delta = (app.b - app.a) / 2;
    
    var funcion = normalice(app.valor);
    var resultadoTotal = 0;
    // sección 1
    var ecuacion = funX(funcion, app.a);
    var resultado = evaludar(ecuacion);
    app.particionesImagen.push({
        particion: `Inicio ${app.a}`,
        imagen: `${ecuacion} = ${resultado}`  
    });
    resultadoTotal += resultado;

    // sección 2
    var x1 = Number(app.a) + app.delta;
    ecuacion = funX(`4[${funcion}]`, x1);
    resultado = evaludar(ecuacion);
    app.particionesImagen.push({
        particion: `${app.a} + ${app.delta} = ${x1}`,
        imagen: `${ecuacion} = ${resultado}`  
    });
    resultadoTotal += resultado;

    // sección 3
    var x2 = x1 + app.delta;
    ecuacion = funX(funcion, x2);
    resultado = evaludar(ecuacion);
    app.particionesImagen.push({
        particion: `${x1} + ${app.delta} = ${x2}`,
        imagen: `${ecuacion} = ${resultado}`  
    });
    resultadoTotal += resultado;

    app.resultado = `Resultado: ${app.delta}(${resultadoTotal})/3 = ${app.delta * resultadoTotal / 3}`;
}

app.metodos['01'] = metodo;