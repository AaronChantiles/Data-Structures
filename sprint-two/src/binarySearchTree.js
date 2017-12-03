var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

BinarySearchTree.prototype.goLeftOrRight = function(value, currentNode) {
  //LEFT: if value is less than current node and left is null
  if (value < currentNode.value && currentNode.left === null) {
    return currentNode;
  } else if (value < currentNode.value && currentNode.left !== null) {
    //if the left property doesn't equal null then recurse to the left prop obj
    return this.goLeftOrRight(value, currentNode.left);
  }

  //RIGHT: if value is greater than current node and right is null
  if (value > currentNode.value && currentNode.right === null) {
    return currentNode;
  } else if (value > currentNode.value && currentNode.right !== null) {
    //if the right property doesn't equal null then recurse to the right prop obj
    return this.goLeftOrRight(value, currentNode.right);
  }

  //if value equals current node value return true
  return true;

};

BinarySearchTree.prototype.insert = function(value) {
  //if the current node doesn't have value create first node
  if (!this.value) {
    var newNode = BinarySearchTree(value);
    return;
  }
  //go left or right
  var currentNode = this.goLeftOrRight(value, this);

  //if the input value doesn't equal the current node value
  if (currentNode !== true) {
    if (value < currentNode.value) {
      //create new node with value at left property of current node
      currentNode.left = BinarySearchTree(value);
    } else {
      //create new node with value at right property of current node
      currentNode.right = BinarySearchTree(value);
    }
  }

};

BinarySearchTree.prototype.contains = function(value) {
  //if value equals current node value return true else false
  var containsValue = this.goLeftOrRight(value, this);
  return containsValue === true ? true : false;

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var currentNode = this;
  var findAllValues = function(currentNode) {
    //if the current node has value execute callback on the value
    if (currentNode.value) { cb(currentNode.value); }
    //if the current node has a left child recurse to left child
    if (currentNode.left) { findAllValues(currentNode.left); }
    //if the current node has a right child recurse to right child
    if (currentNode.right) { findAllValues(currentNode.right); }
  }
  findAllValues(currentNode);
};
/*
 * Complexity: What is the time complexity of the above functions?
    
    Insert, contains, and goLeftOrRight are O(log n).
    DepthFirstLog has to recurse through all nodes and is Linear O(n). 
 */
