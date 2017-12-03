var Stack = function() {
  var someInstance = {};

  someInstance.storage = {};  
  someInstance.count = 1;

  extend(someInstance, stackMethods);
  // someInstance.push = stackMethods.push;
  // someInstance.pop = stackMethods.pop;
  // someInstance.size = stackMethods.size;

  return someInstance;
  
};

var extend = function(destination, sources) {
  for (var key in sources) {
    destination[key] = sources[key];
  }
};


var stackMethods = {};

stackMethods.push = function(value) {
  if (this.count in this.storage) { this.count++; }
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  var keys = Object.keys(this.storage);
  var values = Object.values(this.storage);

  if (keys.length) {
    delete this.storage[keys[keys.length - 1]];
  }
  if (values.length) {
    return values[values.length - 1];
  }
};

stackMethods.size = function() {
  var keys = Object.keys(this.storage);
  return keys.length;
};
