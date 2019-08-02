let id = Symbol.for("id")
let activo = Symbol.for("activo")

let persona = {
    [id]: "123", //Si dentro de un objeto hay simbolos como atriutos, estos no se veran ni se iteran con ciclos normales
    [activo]: true,
    ["codigo"] : "XY123",
    nombre: "Fernando",
    apellido: "Herrera",
    edad : 31
};

for ( key in persona ){
    console.log(persona[key])
}

let simbolos = Object.getOwnPropertySymbols(persona); //Con este metodo encontramos los simbolos dentor de un objeto hecho

console.log(simbolos);

for (i in simbolos){  // y se itera de acuerdo a lo encontrado en el metodo de arriba
    console.log(simbolos[i]);
}