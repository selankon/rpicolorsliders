# Color Sliders for RPI

Basic Angularjs frontend and simple PHP backend that controlls three GPIO of a Rpi.

This GPIO should be connected as [this](https://popoklopsi.github.io/RaspberryPi-LedStrip/#!/) project describe, using mosfets to controll the current that interacts with a RGB led strip.

So, basically: a frontend with 3 sliders that controlls RGB and a PHP that acts as backend that calls the system functions that changes the value of each reed, green, blue leds of the led strip.

### Configurations
To change api url, logo url and image check app/scripts/app.js constants.
To change GPIO numbers, **by default set on pins 17,22,24** check backend.php .

### Requirments
You need to install [pigpio library](http://abyz.co.uk/rpi/pigpio/pigs.html) and start the pigpio daemon to use the backend.
