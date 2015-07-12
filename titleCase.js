/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
 
 */
function titleCase(title, minorWords) {
	if(title === '') { return ''; }
	var words = title.split(' ');
  minorWords = minorWords ? minorWords.split(' ') : [];
  console.log(words);
  for(var i = 0; i < words.length; i++) {
  	words[i] = words[i].toLowerCase();
    if(i === 0) {
    	words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    } else {
    		//check for minor words
        var minor = false;
        for(var j = 0; j < minorWords.length; j++) {
       		if(words[i] === minorWords[j].toLowerCase()) {
          	console.log(words[i], ' is minor!');
          	minor = true;
					}
        }
        
        if(!minor) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
      }
  }
  
  return words.join(' ');
}

