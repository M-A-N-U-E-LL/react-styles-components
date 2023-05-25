import {
    fondoClaro,
    contenidoFondo,
    textoFondoClaro,
    fondoOscuro,
    contenidoOscuro,
    textoFondoOscuro
} from "./variables"

export const temaClaro = {
    body: fondoClaro,
    inside: contenidoFondo,
    text: textoFondoClaro,
    filter: ""
}

export const temaOscuro = {
    body: fondoOscuro,
    inside: contenidoOscuro,
    text: textoFondoOscuro,
    filter: "invert(100%)"
}