width = 8
strip = neopixel.create(DigitalPin.P1, width * width, NeoPixelMode.RGB)
strip.set_matrix_width(width)
pins.set_matrix_width(DigitalPin.P0, width)
i = 0
while i <= width - 1:
    strip.set_matrix_color(i, i, neopixel.colors(NeoPixelColors.RED))
    strip.set_matrix_color(width - (i + 1), i, neopixel.colors(NeoPixelColors.BLUE))
    i += 1
basic.show_number(strip.power())
    
strip.show()