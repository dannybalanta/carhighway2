/**
 * inicializa coordenada x en 0
 */
input.onButtonPressed(Button.A, function () {
    carril += -1
    // al presionar el botón A
    if (coordX == 0 || coordY >= 0 && coordY <= 4) {
        // pausa de 2 s
        basic.pause(2000)
        // condicional que verifica que se arranque en x = 0 y en cualquier coordenada y
        // movimiento en el carril derecho
        moverCarril(carril)
    }
})
/**
 * inicializa coordenada y en 0
 */
input.onButtonPressed(Button.B, function () {
    carril += 1
    // al presionar el botón A
    if (coordX == 0 || coordY >= 0 && coordY <= 4) {
        // pausa de 2 s
        basic.pause(2000)
        // condicional que verifica que se arranque en x = 0 y en cualquier coordenada y
        // movimiento en el carril derecho
        moverCarril(carril)
    }
})
function moverCarril (carril: number) {
    // función moverCarril que toma el valor entero de la variable carril (que a su vez lo toma de la coordenada X) y lo incluye en la función
    // asigna el valor de carril a la coordenada X
    coordX = carril
    // limpiar pantalla
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        // repite el ciclo durante 4 veeces
        // grafica la coordenada x tomando los valores de y de la variable index del bucle por lo que la gráfica se hace de arriba hacia abajo
        led.plot(coordX, index)
        // pausa de 0.1 s
        basic.pause(500)
    }
    if (carril < 0 || carril > 4) {
        basic.showIcon(IconNames.No)
    }
}
let coordY = 0
let coordX = 0
let carril = 0
carril = 2
basic.forever(function () {
    // inicializa variable carril en 0
    // llama a la función moverCarril e inicia movimiento en el carril del medio al arrancar el programa
    moverCarril(carril)
})
