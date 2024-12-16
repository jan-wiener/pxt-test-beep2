


function catchA() {

    if (input.buttonIsPressed(Button.A) && lastTimePressedA == 0) {
        music.playTone(440, 50)
        return 1
    } else if (input.buttonIsPressed(Button.A)) {
        return 1
    } else {
        return 0
    }
   
    
}

let lastTimePressedA: number = 0
basic.forever(function() {


    lastTimePressedA = catchA()
    
    


})