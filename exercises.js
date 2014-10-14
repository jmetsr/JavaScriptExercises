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
    numbers.push(n);
    if (numbers.length === numArgs) {
      return sumArray(numbers);
    } else {
      return _curriedSum;
    };
  }
  return _curriedSum;

};

Function.prototype.curry = function(numArgs){
  var params = [];
  var funct = this;
  function _curried(item) {
    params.push(item);
    if (params.length === numArgs) {
      return funct.apply(this,params);
    }
    else{
      return _curried;
    }
  };
  return _curried;
}

console.log(sum.curry(3)(1));