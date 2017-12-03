var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count = 1;

  someInstance.enqueue = function(value) {

    if (count in storage) { count++; }
    storage[count] = value;
  };

  someInstance.dequeue = function() {

    var keys = Object.keys(storage);
    var values = Object.values(storage);

    if (keys.length) {
      delete storage[keys[0]];
    }

    if (values.length) {
      return values[0];
    }
  };

  someInstance.size = function() {

    var keys = Object.keys(storage);
    return keys.length;

  };

  return someInstance;
};
