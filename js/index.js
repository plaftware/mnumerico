var app = new Vue({
  el: "#app",
  data: {
    valor: "",
    a: "",
    b: "",
    n: "",
    metodos: {},
    metodo: '0',
    deshabilitar: true,
    showN: true,
    particionesImagen: [],
    resultado: undefined,
    delta: undefined,
    showTeclado: true
  },
  methods: {
    addCaracter: addCaracter,
    limpiar: limpiar,
    onChangeMetodo: onChangeMetodo,
    ejecutar: ejecutar
  }
});

function addCaracter(fun) {
    app.valor += fun;
}

function limpiar() {
  app.valor = app.a = app.b = app.n = "";
  app.particionesImagen = [];
  app.resultado = undefined;
  app.delta = undefined;
  if (app.metodo === '0') {
    app.showN = true;
    app.showTeclado = true;
  }
}

function onChangeMetodo() {
  limpiar();
  app.deshabilitar = app.metodo === '0';
  const metodo = app.metodos[app.metodo];
  if (metodo) {
    metodo.setup();
  }
}

function ejecutar() {
  if (validar()) {
    const metodo = app.metodos[app.metodo];
    if (metodo) {
      this.particionesImagen = [];
      try {
        metodo.run();
      } catch (error) {
        console.log(error);
        $.notify(`Error al evaluar valor ${app.valor}`, "error");
      }
    }
  }
}

function validar() {
   if (!app.valor) {
     $.notify("Por favor ingrese valor", "error");
     return false;
   } else if (app.metodo !== '05' && !app.valor.includes("x")) {
      $.notify("Por favor ingrese la variable X", "error");
      return false;
   }
   if (!app.a) {
     $.notify("El valor de A es requerido", "error");
     return false;
   }
   if (!app.b) {
     $.notify("El valor de B es requerido", "error");
     return false;
   }
   if (app.showN && !app.n) {
     $.notify("El valor de N es requerido", "error");
     return false;
   }
   if (app.a && app.b && Number(app.a) > Number(app.b)) {
    $.notify("A no puede ser mayor que B", "error");
    return false;
   }
   return true;
}

function funX(ecuacion, x) {
  return (ecuacion + "").replace(/x/g, x);
}

function normalice(ecuacion) {
  return ecuacion.replace(/(\d+)(x)/gi, "$1*$2")
                 .replace(/(\d+)(\()/gi, "$1*$2");
}

function evaludar(ecuacion) {
  ecuacion = ecuacion.replace(/³√/g, "Math.cbrt")
                      .replace(/(\d+)√\(/gi, "Math.raizX($1,")
                      .replace(/√/g, "Math.sqrt")
                      .replace(/log/g, "Math.log10")
                      .replace(/ln/g, "Math.log")
                      .replace(/sen/g, "Math.sin")
                      .replace(/cos/g, "Math.cos")
                      .replace(/tan/g, "Math.tan")
                      .replace(/e\(/g, "Math.exp(")
                      .replace(/(\d+)\^\(/gi, "Math.pow($1,")
                      .replace(/(\([0-9\*+-/]*\))\^\(/gi, "Math.pow($1,")
                      .replace(/\[/g, "*(")
                      .replace(/\]/g, ")");
  console.log(ecuacion);                    
  return eval(ecuacion);
}

// Decimal round
if (!Math.raizX) {
  Math.raizX = function(value, exp) {
    return eval(`Math.pow(${exp}, 1/${value})`);
  };
}