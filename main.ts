input.onButtonPressed(Button.B, function () {
	
})
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
basic.forever(function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 45)
    basic.pause(1000)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    while (!(input.buttonIsPressed(Button.A))) {
        basic.pause(5)
    }
    basic.showIcon(IconNames.Square)
})
basic.forever(function () {
    while (!(input.buttonIsPressed(Button.B))) {
        basic.pause(5)
    }
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
    while (input.buttonIsPressed(Button.B)) {
        basic.pause(5)
    }
    while (!(input.buttonIsPressed(Button.B))) {
        basic.pause(5)
    }
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
    while (input.buttonIsPressed(Button.B)) {
        basic.pause(5)
    }
})
