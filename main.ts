input.onButtonPressed(Button.A, function () {
    numberTester += 1
    basic.showNumber(numberTester, 1)
})
input.onButtonPressed(Button.AB, function () {
    numberTester = 0
    basic.showNumber(numberTester, 1)
})
input.onButtonPressed(Button.B, function () {
    numberTester += -1
    basic.showNumber(numberTester, 1)
})
let numberTester = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . # # . .
    # . . # .
    # . . # .
    # . . # .
    . # # . .
    `)
