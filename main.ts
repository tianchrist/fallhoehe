let sek = 0
let enable = false
let running = false
let zeitA_ms = 0
let zeit_ms = 0
let result = false
let h_m = 0
function Countdown () {
    sek = 3
    for (let index = 0; index < 3; index++) {
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.showNumber(sek)
        basic.pause(1000)
        sek += -1
    }
    basic.clearScreen()
    music.playTone(392, music.beat(BeatFraction.Half))
}
basic.forever(function () {
    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            Countdown()
            enable = true
        }
        if (enable) {
            if (!(running) && input.acceleration(Dimension.Strength) < 500) {
                zeitA_ms = input.runningTime()
                if (!(running)) {
                    running = true
                }
            }
            if (running && input.acceleration(Dimension.Strength) > 1000) {
                zeit_ms = input.runningTime() - zeitA_ms
                running = false
                result = true
                enable=false
            }
        }
        if (result) {
            // basic.showNumber(zeit_ms)
            h_m = 9.81 / 2 * (zeit_ms / 1000) ** 2
            basic.showNumber(h_m)
        }
    }
})
