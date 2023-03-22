input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Heart)
    }
})
