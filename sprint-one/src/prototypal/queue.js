var Queue = function() {
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.count = 1;  

  return someInstance;
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

