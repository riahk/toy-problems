//INPUT: array of arrays representing a pyramid
//OUTPUT: max sum of adjacent nums

var maxPathSum = function(pyr) {
  var pyramid = pyr.slice(0);
  var firstVal = pyramid[0][0]; //the top of the pyramid
  console.log('topVal', firstVal);
  pyramid[0][0] = { value: firstVal,
                    pathSum: firstVal,
                    row: 0,
                    col: 0,
                    visited: false };
    
  console.log('top', pyramid[0][0])
  var sums = [];

  //initialize a queue of nodes to visit:
  var nodeQ = [pyramid[0][0]];

  while(nodeQ.length > 0) {
    //get node to visit
    var parentnode = nodeQ.shift();
    console.log('now visiting', parentnode);

    if(!parentnode.visited) {
      var child1 = pyramid[parentnode.row+1][parentnode.col];
      var child2 = pyramid[parentnode.row+1][parentnode.col+1];

      if(typeof child1 === "number") {
        console.log('initializing child');
        child1 = { value: child1,
                   pathSum: 0,
                   row: parentnode.row+1,
                   col: parentnode.col,
                   visited: false
                 };
      }

      if(typeof child2 === "number") {
        console.log('initializing child');
        child2 = { value: child2,
                   pathSum: 0,
                   row: parentnode.row+1,
                   col: parentnode.col+1,
                   visited: false
                 };
      } 
      
      console.log('child1', child1);
      console.log('child2', child2);

      //update path sums if necessary
      child1Path = parentnode.pathSum + child1.value;
      if(child1Path > child1.pathSum) {
        child1.pathSum = child1Path;
      }

      child2Path = parentnode.pathSum + child2.value;
      if(child2Path > child2.pathSum) {
        child2.pathSum = child2Path;
      }

      if(child1.row < pyramid.length-1) {
        if(child1.pathSum > child2.pathSum) {
          nodeQ.push(child1);
          nodeQ.push(child2);
        } else {
            nodeQ.push(child2);
            nodeQ.push(child1);
        }
      } else {
          sums.push(child1.pathSum);
          sums.push(child2.pathSum);
      }
      
      parentnode.visited = true;
    }
  }

  //loop through last row to find largest pathSum
  var maxSum = 0;
  var finalRow = pyramid[pyramid.length-1];
  for(var i = 0; i < sums.length; i++) {
    console.log('sum', sums[i]);
    if(sums[i] > maxSum) {
      maxSum = sums[i];
    }
  }

  return maxSum;
}

