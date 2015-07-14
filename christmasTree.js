/*
Create a function christmasTree(height) that returns a christmas tree of the correct height

christmasTree(5) should return:

    *    
   ***   
  *****  
 ******* 
*********
Height passed is always an integer between 0 and 100.

Use \n for newlines between each line.

Pad with spaces so each line is the same length. The last line having only stars, no spaces.
 */

function christmasTree(height) {
	var width = (2*height) - 1;
  var midpoint = Math.floor(width/2);
  
  var row = [];
  //create first row
  for(var i = 0; i < width; i++) {
  	row.push(' ');
  }
  
  row[midpoint] = '*';
  
  var tree = [row.join('')];
  
  //create tree
  for(var j = 1; j < height; j++) {
  	var newRow = tree[j-1].slice().split('');
    newRow[midpoint+j] = '*';
    newRow[midpoint-j] = '*';
    
    tree.push(newRow.join(''));
  }
  
  return tree.join('\n');
}

