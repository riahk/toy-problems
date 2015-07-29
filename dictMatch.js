/*
In this kata you have to extend the dictionary with a method, that returns a list of words matching a pattern. This pattern may contain letters (lowercase) and placeholders ("?"). A placeholder stands for exactly one arbitrary letter.

Example:

var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
fruits.getMatchingWords('lemon');     // must return []
fruits.getMatchingWords('cherr??');   // must return []
fruits.getMatchingWords('?a?a?a');    // must return ['banana', 'papaya']
fruits.getMatchingWords('??????');    // must return ['banana', 'papaya', 'cherry']
Additional Notes:

the words and patterns are all lowercase
the order of the returned words doesn't matter
 
 */

function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
    //create object copy of the dictionary's words
  var matches = {};
  for(var i = 0; i < this.words.length; i++) {
		matches[this.words[i]] = this.words[i];
  }
  
  for(var j = 0; j < pattern.length; j++) { //check each letter in the pattern
		var toDelete = []; //words to remove from the matches obj
		for(var word in matches) { //check each word
    	if(word.length !== pattern.length) { //if the pattern is longer than the word, or the word is longer than the pattern, remove it
      	toDelete.push(word);
			} else if(pattern[j] === '?') { //wild card; word is acceptable
      		continue;
        } else if(pattern[j] !== word[j]) {
        		toDelete.push(word);
          }
		}
    //delete non-matching words
    for(var k = 0; k < toDelete.length; k++) {
    	console.log('deleting', toDelete[k]);
    	delete matches[toDelete[k]];
    }
  }
  
  //turn matches into an array and return it
  var result = [];
  for(var match in matches) {
  	result.push(matches[match]);
  }
  
  return result;
}

