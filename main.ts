input.onButtonPressed(Button.A, function () {
    if (jogadorX > 0) {
        jogadorX = jogadorX - 1
    }
})
input.onButtonPressed(Button.AB, function () {
    virusX = randint(0, 4)
    virusY = 0
    jogadorX = 2
    jogadorY = 4
    gameover = false
})
input.onButtonPressed(Button.B, function () {
    if (jogadorX < 4) {
        jogadorX = jogadorX + 1
    }
})
let gameover = false
let jogadorY = 0
let jogadorX = 0
let virusY = 0
let virusX = 0
virusX = randint(0, 4)
virusY = 0
jogadorX = 2
jogadorY = 4
gameover = false
basic.forever(function () {
    while (!(gameover)) {
        basic.clearScreen()
        led.plot(jogadorX, jogadorY)
        led.plot(virusX, virusY)
        if (virusY == 4 && virusX == jogadorX) {
            gameover = true
            basic.clearScreen()
            basic.showString("GAME OVER")
        }
        virusY = virusY + 1
        if (virusY == 5) {
            virusY = 0
            virusX = randint(0, 4)
        }
        basic.pause(500)
    }
})
