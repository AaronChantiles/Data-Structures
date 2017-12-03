var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //if obj does not have property item
  if (!this.storage.hasOwnProperty(item)) {
    //add value item to obj
    this.storage[item] = item;
  }
  
  
};

setPrototype.contains = function(item) {
  //if obj has property item
  if (this.storage.hasOwnProperty(item)) { return true; }
  //return false
  return false;
};

setPrototype.remove = function(item) {
  //if obj has property item
  if (this.storage.hasOwnProperty(item)) {
    //delete obj item
    delete this.storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

    All functions iterate to find properties and are therefore linear O(n).
 */
