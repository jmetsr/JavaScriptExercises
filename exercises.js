function sum() {
  var total = 0;
  for (var i =0;i<arguments.length;i++)
  {
    total += arguments[i];
  }
  return total;
};

Function.prototype.myBind = function(object) {

  var args = Array.prototype.slice.call(arguments);
  console.log(args)
  var funct = this;
  return function() {

    return funct.call(object,args[1]);
  }
}

function sumArray(arr) {
  var total = 0;
  for (var i =0;i<arr.length;i++)
  {
    total += arr[i];
  }
  return total;
}

function curriedSum(numArgs) {
  var numbers = [];

  function _curriedSum(n) {
    numbers.push(n)
    if (numbers.length === numArgs) {
      return sumArray(numbers);
    } else {
      return _curriedSum;
    };
  }
  return _curriedSum;

};
var f1 = curriedSum(4)(2)(50)(7)(3);

console.log(f1)

