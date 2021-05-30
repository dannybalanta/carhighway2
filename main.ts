/**
 * inicializa coordenada x en 0
 */
/**
 * inicializa coordenada y en 0
 */
input.onButtonPressed(Button.A, function () {
    coordX += -1
    if (coordX < 0) {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        coordX = 0
    }
})
input.onButtonPressed(Button.B, function () {
    coordX += 1
    if (coordX > 4) {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        coordX = 4
    }
})
function moverCarril () {
    for (let index = 0; index <= 4; index++) {
        // repite el ciclo durante 4 veeces
        // grafica la coordenada x tomando los valores de y de la variable index del bucle por lo que la gráfica se hace de arriba hacia abajo
        led.plot(coordX, index)
        // pausa de 0.1 s
        basic.pause(500)
        basic.clearScreen()
    }
}
let coordX = 0
coordX = 2
basic.forever(function () {
    moverCarril()
})
