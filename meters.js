/*
Scientists working internationally use metric units almost exclusively. Unless that is, they wish to crash multimillion dollars worth of equipment on Mars.

Your task is to write a simple function that takes a number of meters, and outputs it using metric prefixes.

In practice, meters are only measured in "mm" (thousandths of a meter), "cm" (hundredths of a meter), "m" (meters) and "km" (kilometers, or clicks for the US military).

For this exercise we just want units bigger than a meter, from meters up to yottameters, excluding decameters and hectometers.

All values passed in will be positive integers. e.g.

meters(5);
// returns "5m"

meters(51500);
// returns "51.5km"

meters(5000000);
// returns "5Mm"
See http://en.wikipedia.org/wiki/SI_prefix for a full list of prefixes
 */

function meters(x) {
	var prefixes = {
  	0: ['m',0],
    1: ['m',0],
    2: ['m',0],
    3: ['m',0],
    4: ['km',3],
    5: ['km',3],
    6: ['km',3],
    7: ['Mm',6],
    8: ['Mm',6],
    9: ['Mm',6],
    10: ['Gm',9],
    11: ['Gm',9],
    12: ['Gm',9],
    13: ['Tm',12],
    14: ['Tm',12],
    15: ['Tm',12],
    16: ['Pm',15],
    17: ['Pm',15],
    18: ['Pm',15],
    19: ['Em',18],
    20: ['Em',18],
    21: ['Em',18],
    22: ['Zm',21],
    23: ['Zm',21],
    24: ['Zm',21]
  };
  
  var floored = Math.floor(x);
  console.log('floored', floored);
  var prefix = '';
  var divide = 1;
  
 	var digits = floored.toString().length;
  if((floored/1000000000000000000000) >= 1) {
  	digits = 22;
  }
  
  if((floored/1000000000000000000000000) >= 1) {
  	digits = 25;
  }
  
  console.log('digits',digits);
  
  if (digits >= 25 ) { 
  	prefix = 'Ym';
    divide = 24;
  } else { 
  		prefix = prefixes[digits][0]; 
      divide = prefixes[digits][1];
    }
  
  var val = x/Math.pow(10,divide);
  return val+prefix;
}

