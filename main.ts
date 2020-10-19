radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 38) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedNumber == 4) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 62)
    } else if (receivedNumber == 566) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (receivedNumber == 3) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    } else if (receivedNumber == 5) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 62)
    } else if (receivedNumber == 98) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 133)
    } else if (false) {
    	
    } else {
    	
    }
})
maqueen.ltEvent(maqueen.Patrol1.PatrolRight, maqueen.Voltage.Low, function () {
	
})
maqueen.ltEvent(maqueen.Patrol1.PatrolLeft, maqueen.Voltage.Low, function () {
	
})
basic.showLeds(`
    . . . . #
    . . . # #
    . . # # #
    . # # # #
    # # # # #
    `)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    radio.setGroup(567)
})
