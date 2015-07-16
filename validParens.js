/*
Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

Examples: 
validParentheses( "()" ) => returns true 
validParentheses( ")(()))" ) => returns false 
validParentheses( "(" ) => returns false 
validParentheses( "(())((()())())" ) => returns true 

All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')' 
 */

function validParentheses(parens){
	var openParens = [];
  
  for(var i = 0; i < parens.length; i++) {
  	if(parens[i] === '(') {
    	openParens.push('(');
    }
    
    if(parens[i] === ')') {
    	if(openParens.length > 0) {
      	openParens.pop();
      } else { return false; }
    }
  }
  
  if(openParens.length === 0) {
  	return true;
  } else { return false; }
}

