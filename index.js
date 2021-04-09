//preguntamos cuantos pasos tendra la escalera
let n=prompt('Hola,cuantos escalones tiene la escalera para darte las combinaciones posibles?');

//hacemos una funcion y como sabemos que los pasos son 1 y 2 a n decimos que es menor que 3
 function subirEscalera(n){
  if (n<3) 
    return n
  else
    return (subirEscalera(n-1)+subirEscalera(n-2)); //aplicamos seria finofacci
}                        
console.log(subirEscalera(n));  

let formas = (subirEscalera(n)); //asignamos a una variable la funcion para mostrar en alert

alert(`Con la cantidad ${n} pasos se puede subir las escaleras de ${formas} combinaciones posiles con 1 o 2 pasos `)
