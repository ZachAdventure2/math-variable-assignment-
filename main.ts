input.onButtonPressed(Button.A, function () {
    NUMB += 1
    basic.showNumber(NUMB)
})
input.onButtonPressed(Button.B, function () {
    NUMB += 2
    basic.showNumber(NUMB)
})
let NUMB = 0
basic.showIcon(IconNames.Skull)
let Pic = 0
