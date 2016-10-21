<?php

// Define gpio number for every color
define("RED", "17");
define("GREEN", "22");
define("BLUE", "24");


if (isset ( $_GET["color"] ) && isset ( $_GET["value"] ) ) {
	$color = strip_tags ($_GET["color"]);
	$value = strip_tags ($_GET["value"]);

	//test if is a valid color and a valid value
	if ( (is_numeric($value)) && ($value <= 255) && ($value >= 0) && in_array($color, array('red','green','blue')) ) {

		//http://abyz.co.uk/rpi/pigpio/pigs.html
		// The normal way to start the pigpio library would be as a daemon during boot.
		// 		sudo pigpiod

		// 			echo "p 22 128" > /dev/pigpio

		// if ( $color == 'red') {system("pigs ".RED." ".$value );}
		// if ( $color == 'green') {system("pigs ".GREEN." ".$value );}
		// if ( $color == 'blue') {system("pigs ".BLUE." ".$value );}

		if ( $color == 'red') {echo ("pigs ".RED." ".$value );}
		if ( $color == 'green') {echo("pigs ".GREEN." ".$value );}
		if ( $color == 'blue') {echo("pigs ".BLUE." ".$value );}



		// echo ("color: '".$color."' value: ".$value);

	}
	else { echo ("fail: variables values not match!"); }
} //print fail if cannot use values
else { echo ("fail: variables, color and value, not match"); }
?>
