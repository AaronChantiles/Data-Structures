var Queue = function() {
  this.storage = {};
  this.count = 1;
};


Queue.prototype.enqueue = function(value) {
  if (this.count in this.storage) { this.count++; }
  this.storage[this.count] = value;
};

Queue.prototype.dequeue = function() {
  var keys = Object.keys(this.storage);
  var values = Object.values(this.storage);

  if (keys.length) {
    delete this.storage[keys[0]];
  }

  if (values.length) {
    return values[0];
  }
};

Queue.prototype.size = function() {
  var keys = Object.keys(this.storage);

  return keys.length;
};

