var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create a new node
    var newNode = new Node(value);
    //designate the tail to a new node
    list.tail = newNode;
    
    //check if the current node (list.head specifically) does not exist
    if (!list.head) {
      //create a head node
      list.head = newNode;
      return newNode;
    } 
    //nesting the new node in the old node's next (which was previously null aka the tail)
    list.head.next = newNode;
    return newNode;
  };

  list.removeHead = function() {
    var value = list.head.value;

    if (list.head) {
      //"remove current head" by setting list.head to the next node
      list.head = list.head.next;
    }

    return value;
  };

  list.contains = function(target) {
    //returns true if target in list and false if not
    var currentNode = list.head;
    //as long as currentNode.next exists
    while (currentNode.next) {
      //Check current node value equals the target value
      if (currentNode.value === target) { return true; }
      //if not, increment current node to the next node
      currentNode = currentNode.next;
    }
    //check last value. return true or false
    return currentNode.value === target;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

    AddToTail and RemoveHead are Constant O(1).
    Contains has to search through and is linear O(n).
 */
