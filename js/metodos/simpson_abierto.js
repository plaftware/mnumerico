
var metodo = {};

// Metodo Setup
metodo.setup = function() {
    app.showN = true;
    app.showTeclado = true;
}

metodo.run = function() {
    app.delta = (app.b - app.a) / app.n;
    
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


    // sección bucle
    var x1 = Number(app.a);
    for (let i = 1; i < Number(app.n); i++) {
        ecuacion = funX(`${i % 2 === 0 ? 2 : 4}[${funcion}]`, x1 + app.delta);
        resultado = evaludar(ecuacion);
        app.particionesImagen.push({
            particion: `${x1} + ${app.delta} = ${x1 + app.delta}`,
            imagen: `${ecuacion} = ${resultado}`  
        });
        resultadoTotal += resultado;
        x1 = x1 + app.delta;
    }

    // sección final
    var x2 = x1 + app.delta;
    ecuacion = funX(funcion, x2);
    resultado = evaludar(ecuacion);
    app.particionesImagen.push({
        particion: `${x1} + ${app.delta} = ${x2}`,
        imagen: `${ecuacion} = ${resultado}`  
    });
    resultadoTotal += resultado;

    app.resultado = `Resultado: (${app.b - app.a}[${resultadoTotal}]/${app.n * 3}) = ${((app.b - app.a)*resultadoTotal)/(app.n * 3)}`;
}

app.metodos['03'] = metodo;