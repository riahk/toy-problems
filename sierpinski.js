/*
Write a function that takes an integer n and returns the nth iteration of the fractal known as Sierpinski's Gasket.

Here are the first few iterations. The fractal is composed entirely of L and white-space characters; each character has one space between it and the next (or a newline).

0

L
1

L
L L
2

L
L L
L   L
L L L L
3

L
L L
L   L
L L L L
L       L
L L     L L
L   L   L   L
L L L L L L L L
 
 */

function sierpinski(n) {
	//height/width = 2^n
	var h = Math.pow(2, n);
  var triangle = [['L']];
  
  for(var k = 0; k < n; k++) {
    for(var i = 0; i < Math.pow(2, k); i++) {
    	for(var j = 0; j < Math.pow(2, k); j++) {
      	    var index = Math.pow(2, k) + i;
      	    var offset = Math.pow(2, k);
      	    if(triangle[index] === undefined) {
      	        triangle[index] = [];
      	    }
      	    if(triangle[i][j] === 'L') {
                triangle[index][j] = triangle[i][j].slice();
                triangle[index][j+offset] = triangle[i][j].slice();
      	    } else { 
      	        triangle[index][j] = 0; 
      	        triangle[index][j+offset] = 0;
      	    }
        }
    }
  }
  
  var final = [];
  
  //turn triangle into array of strings
  for(var m = 0; m < triangle.length; m++) {
  	//create string
    var str = '';
    for(var p = 0; p < triangle[m].length; p++) {
    	if(triangle[m][p] === 'L') {
      	str += 'L ';
      } else { str += '  '; }
    }
    
    final.push(str.slice().trim());
  }
  console.log(final);
  return final.join('\n');
}

