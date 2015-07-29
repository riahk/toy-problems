/*
If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

Usage example:

var complexFunction = function(arg1, arg2) { complex calculation in here };
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments
 
 */

function cache(func) {
	var results = {};
  var objResults = []; //for object arguments
  console.log(func);
  
  return function(args) {
  	console.log('args', args);
    console.log(typeof args);
    if(typeof args === 'object') {
    	console.log('searching to see if that arg has been memoized...');
    	for(var i = 0; i < objResults.length; i++) {
      	if(objResults[i][0] === args) {
        	console.log('found it!');
        	return objResults[i][1];
        }
      }
      console.log('new arg!');
      var result = func.apply(this, arguments);
      console.log('saving...');
    	objResults.push([args, result]);
      return result;
    }
      
    
  	if(results.hasOwnProperty(args)) {
    	return results[args];
    } else {
    		results[args] = func.apply(this, arguments);
        return results[args];
      }
  };
     

