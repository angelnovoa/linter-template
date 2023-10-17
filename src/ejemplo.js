const diccionario = new Set([
  {
    palabra: "espectrógrafo",
    silabas: ["es", "pec", "tró", "gra", "fo"],
    tonica: 3,
  },
  { palabra: "ágrafo", silabas: ["á", "gra", "fo"], tonica: 1 },
  { palabra: "telégrafo", silabas: ["te", "lé", "gra", "fo"], tonica: 2 },
  { palabra: "fotógrafo", silabas: ["fo", "tó", "gra", "fo"], tonica: 2 },
  { palabra: "jerséis", silabas: ["jer", "séis"], tonica: 2 },
  { palabra: "seis", silabas: ["seis"], tonica: 1 },
  { palabra: "veis", silabas: ["veis"], tonica: 1 },
]);

let ultimasJuntas = "";

function obtenerParaCompararPalabraBuscada(palabra, diccionario) {
  for (let elemento of diccionario) {
    if (palabra == elemento.palabra) {
      // Busca la palabra en el diccionario
      let silabaTonica = elemento.silabas[elemento.tonica - 1]; // Busca la silaba tónica
      let ultimaLetraTonica = silabaTonica.substring(silabaTonica.length - 1); //Obtengo la ultima letra de la silaba tónica
      for (let i = elemento.tonica; i < elemento.silabas.length; i++) {
        ultimasJuntas = ultimasJuntas.concat(elemento.silabas[i]); //Concateno las silabas despus de la tónica
      }
      let paraComparar = ultimaLetraTonica.concat(ultimasJuntas); //Concateno la ultima letra de la silaba tónica con las silabas después de la tónica
      return paraComparar;
    }
  }
}

function obtenerParaCompararResto(palabra, diccionario) {
  let palabrasDiccionario = new Map();
  for (let elemento of diccionario) {
    if (palabra != elemento.palabra) {
      let ultimasJuntas = "";
      let silabaTonica = elemento.silabas[elemento.tonica - 1];
      let ultimaLetraTonica = silabaTonica.substring(silabaTonica.length - 1);
      for (let i = elemento.tonica; i < elemento.silabas.length; i++) {
        ultimasJuntas = ultimasJuntas.concat(elemento.silabas[i]);
      }
      let paraAñadir = ultimaLetraTonica.concat(ultimasJuntas);
      palabrasDiccionario.set(elemento.palabra, paraAñadir);
    }
  }
  return palabrasDiccionario;
}

function buscar(palabra, diccionario) {
  let paraComparar = obtenerParaCompararPalabraBuscada(palabra, diccionario);
  let solucion = new Set();
  for (var [key, value] of obtenerParaCompararResto(palabra, diccionario)) {
    if (value == paraComparar) {
      solucion.add([{ palabra: key, rima: "consonante" }]);
    }
  }

  for (let listaPalabra of solucion) {
    console.log(listaPalabra);
  }
}

buscar("jerséis", diccionario);

//comprarlos menos a si misma
//guardar en nuevoSet
//imprimir nuevoSet
