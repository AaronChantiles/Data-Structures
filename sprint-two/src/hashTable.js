var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
 //if a bucket exists at index
  var bucket = this._storage.get(index);
  if (Array.isArray(bucket)) {
    //variable to check if you should create tuple
    var createTuple = true;
    //iterate through tuples to check for replacing key
    for (var i = 0; i < bucket.length; i++) {
      //check if the value at index 0 equals the k input
      if (bucket[i][0] === k) {
        //replace the value at index 1 to the input value
        bucket[i][1] = v;
        createTuple = false;
      }
    }
    //set the new index of bucket array to the array k, v inputs
    if (createTuple) {
      var nestedArr = bucket[bucket.length] = [k, v];
    }
  } else {
    bucket = this._storage.get(index);
    //create a bucket for the index
    //access storage set function and push key/value in at specified index
    this._storage.set(index, [[k, v]]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if bucket array exists
  var bucket = this._storage.get(index);
  if (Array.isArray(bucket)) {
    //for each index in bucket
    for (var i = 0; i < bucket.length; i++) {
      //check if the value at index 0 equals the k input
      if (bucket[i][0] === k) {
        //return the value at index 1
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if bucket array exists
  var bucket = this._storage.get(index);
  if (Array.isArray(bucket)) {
    //for each index in bucket
    for (var i = 0; i < bucket.length; i++) {
      //check if the value at index 0 equals the k input
      if (bucket[i][0] === k) {
        //delete tuple
        return bucket.splice(i, 1);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?

    All of the functions involve some type of iteration through arrays making them 
    linear O(n); however, insert is potentially constant O(1) if a bucket doesn't exist. 
 */


