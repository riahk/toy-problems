/*
Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay 
 */

function pigIt(str){
	var words = str.split(' ');
  
  for(var i = 0; i < words.length; i++) {
  	var first = words[i].slice(0,1);
    var rest = words[i].slice(1);
    
    rest += (first+'ay');
    words[i] = rest;
  }
  
  return words.join(' ');
}

