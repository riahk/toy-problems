/*
At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 are in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears 
 */

function isMerge(s, part1, part2) {
	var indx1 = 0;
  var indx2 = 0;
  
  for(var i = 0; i < s.length; i++) {
  	if(indx1 < part1.length && indx2 < part2.length) {
    	//check part1 for the desired letter
      if(part1[indx1] === s[i]) {
      	indx1++;
      	continue;
      } else if (part2[indx2] === s[i]) {
      		indx2++;
          continue;
        } else { return false; }
    } else { //if one string is used up
    		var remaining = s.slice(i);
        if(part1.slice(indx1) === remaining || part2.slice(indx2) === remaining) {
          return true;
        } else { return false; }
  	}
  }
}

