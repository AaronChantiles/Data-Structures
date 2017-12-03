var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var count = 1;

  // Implement the methods below
  someInstance.push = function(value) {
  //Add a str to storage
    if (count in storage) { count++; }
    storage[count] = value;
  };

  someInstance.pop = function() {
    var keys = Object.keys(storage);
    var values = Object.values(storage);

    if (keys.length) {
      delete storage[keys[keys.length - 1]];
    }
    if (values.length) {
      return values[values.length - 1];
    }
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
    return keys.length;
  };

  return someInstance;
};
