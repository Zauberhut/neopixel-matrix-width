let i = 0
let width = 8
let height = 8
let strip = neopixel.create(DigitalPin.P1, width * height, NeoPixelMode.RGB)
strip.setMatrixWidth(width)
pins.setMatrixWidth(DigitalPin.P0, width)
while (i <= width - 1) {
    if (true) {
    	
    }
    strip.setMatrixColor(i, i, neopixel.colors(NeoPixelColors.Red))
    strip.setMatrixColor(width - (i + 1), i, neopixel.colors(NeoPixelColors.Blue))
    i += 1
}
basic.showNumber(strip.power())
strip.show()
