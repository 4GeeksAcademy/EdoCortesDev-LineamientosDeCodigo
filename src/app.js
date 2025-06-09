import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// El nuevo código fue dividido en funciones pequenas, claras y con una unica responsabilidad
// Funciones ynombres de variables con nombres claros y descriptivos

window.onload = function () {
  generarDominios();
};

function generarDominios() {
  const pronombres = ["el", "ese", "aquel"];
  const adjetivos = ["valiente", "inteligente", "fuerte"];
  const sustantivos = ["guerrero", "científico", "atleta"];

  const dominios = combinarPalabras(pronombres, adjetivos, sustantivos);
  mostrarDominios(dominios);
}

function combinarPalabras(pronombres, adjetivos, sustantivos) {
  const resultados = [];
  
  for (const pronombre of pronombres) {
    for (const adjetivo of adjetivos) {
      for (const sustantivo of sustantivos) {
        resultados.push(`${pronombre}${adjetivo}${sustantivo}.com`);
      }
    }
  }
  
  return resultados;
}

function mostrarDominios(lista) {
  for (const dominio of lista) {
    console.log(dominio);
  }
}
