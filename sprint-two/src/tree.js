var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //if root obj value does not exist
  if (!this.value) {
    //set value to addChild value
    this.value = value;
  }
  //create new tree object
  var newTree = new Tree(value);
  //push an object containing a value and children property
  this.children.push(newTree);

  return this;
};

treeMethods.contains = function(target) {
  //if root obj value exists
  if (this.value) {
    //check if value of parent node equal target
    if (this.value === target) { return true; }

    //save boolean from searchAllChildren function
    var boolean = false;
    var searchAllChildren = function(child) {
       //iterate through each child
      for (var i = 0; i < child.length; i++) {
        //check if value equal target
        if (child[i].value === target) {
          boolean = true;
        }
        //while child.length exists
        if (child[i].children.length) {
          searchAllChildren(child[i].children);
        }
      }
    };
    searchAllChildren(this.children);
    return boolean;
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?

    Creating and inserting a new tree node is constant O(1).
    Searching through tree with contains is linear O(n)
 */
