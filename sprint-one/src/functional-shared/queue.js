var Queue = function() {
  var someInstance = {};

  someInstance.storage = {};

  someInstance.count = 1;

  extend(someInstance, queueMethods);
  // someInstance.enqueue = queueMethods.enqueue;
  // someInstance.dequeue = queueMethods.dequeue;
  // someInstance.size = queueMethods.size;

  return someInstance;
};

var extend = function(destination, sources) {
  for (var key in sources) {
    destination[key] = sources[key];
  }
};


var queueMethods = {};

queueMethods.enqueue = function(value) {

  if (this.count in this.storage) { this.count++; }
  this.storage[this.count] = value;

};

queueMethods.dequeue = function() {

  var keys = Object.keys(this.storage);
  var values = Object.values(this.storage);

  if (keys.length) {
    delete this.storage[keys[0]];
  }

  if (values.length) {
    return values[0];
  }
};

queueMethods.size = function() {
  var keys = Object.keys(this.storage);

  return keys.length;

};
