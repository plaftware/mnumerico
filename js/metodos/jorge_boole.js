
var metodo = {};

// Metodo Setup
metodo.setup = function() {
    app.showN = false;
    app.showTeclado = true;
}

metodo.run = function() {
    app.delta = (app.b - app.a) / 4;
    
    var funcion = normalice(app.valor);
    var resultadoTotal = 0;
    // sección 1
    var ecuacion = funX(`7[${funcion}]`, app.a);
    var resultado = evaludar(ecuacion);
    app.particionesImagen.push({
        particion: `Inicio ${app.a}`,
        imagen: `${ecuacion} = ${resultado}`  
    });
    resultadoTotal += resultado;

    // sección 2
    var x1 = Number(app.a) + app.delta;
    ecuacion = funX(`32[${funcion}]`, x1);
    resultado = evaludar(ecuacion);
    app.particionesImagen.push({
        particion: `${app.a} + ${app.delta} = ${x1}`,
        imagen: `${ecuacion} = ${resultado}`  
    });
    resultadoTotal += resultado;

    // sección 3
    var x2 = x1 + app.delta;
    ecuacion = funX(`12[${funcion}]`, x2);
    resultado = evaludar(ecuacion);
    app.particionesImagen.push({
        particion: `${x1} + ${app.delta} = ${x2}`,
        imagen: `${ecuacion} = ${resultado}`  
    });
    resultadoTotal += resultado;

    // sección 4
    var x3 = x2 + app.delta;
    ecuacion = funX(`32[${funcion}]`, x3);
    resultado = evaludar(ecuacion);
    app.particionesImagen.push({
        particion: `${x2} + ${app.delta} = ${x3}`,
        imagen: `${ecuacion} = ${resultado}`  
    });
    resultadoTotal += resultado;

    // sección 5
    var x4 = x3 + app.delta;
    ecuacion = funX(`7[${funcion}]`, x4);
    resultado = evaludar(ecuacion);
    app.particionesImagen.push({
        particion: `${x3} + ${app.delta} = ${x4}`,
        imagen: `${ecuacion} = ${resultado}`  
    });
    resultadoTotal += resultado;

    app.resultado = `Resultado: (2(${app.delta})/45)*${resultadoTotal} = ${(2 * app.delta / 45) * resultadoTotal}`;
}

app.metodos['04'] = metodo;