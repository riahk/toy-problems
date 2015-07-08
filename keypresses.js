/*
Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|     | |space| |     |
|  *  | |  0  | |  #  |
------- ------- -------
Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)
 
*/

function presses(phrase) {
	var keyboard = [["A","B","C"], ["D","E","F"], ["G","H","I"],
  		      ["J","K","L"], ["M","N","O"], ["P","Q","R","S"],
                  ["T","U","V"], ["W","X","Y","Z"]];
                  
  var phrase = phrase.toUpperCase();
 	var letters = phrase.split('');
  
  var keypresses = 0;
  
  for(var i = 0; i < letters.length; i++) {
  	console.log(letters[i]);
    console.log(letters[i].charCodeAt());
  	if(letters[i] === ' ' || letters[i] === '1') {
    	console.log('space');
    	keypresses++;
    } else if(letters[i] === '0') {
    	keypresses += 2;
    } else if(letters[i].charCodeAt() - 50 <= 7) {
    		keypresses += 4;
        console.log('number');
      }
    
    	else {
  			for(var j = 0; j < keyboard.length; j++) {
    			for(var k = 0; k < keyboard[j].length; k++) {
      			if(keyboard[j][k] === letters[i]) {
        			keypresses += (k+1);
              console.log(letters[i]);
        		}
      		}
    		}
  		}
    }
  
  return keypresses;
          
  
  /*for(var i = 0; i < letters.length; i++) {
  	var charCode = letters[i].charCodeAt();
    var key = 0;
  	if(letters[i] === ' ') { 
    	keypresses++; 
    } else if(charCode - 65 > 14) {
    		if(charCode < 19) { 
        	key = 5;
        } else if(charCode < 22) {
        	key = 6;
        } else { key = 7; }
      } else { key = Math.floor(charCode/3); }
    
    for(var j = 0; j < keyboard[key].length; j++) {
    	if(*/
}

