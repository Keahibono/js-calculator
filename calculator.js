/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = function () {

  var _memory = 0;
  var _total = 0;

  var calculator = {
    load: _valid(_load),
    getTotal: _getTotal,
    add: _valid(_add),
    subtract: _valid(_subtract),
    multiply: _valid(_multiply),
    divide: _validate(_divide),
    recall: _recall,
    save: _save,
    clear: _clear
  };

  return calculator;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
function _load(x){
  return _total = x;

};

  /**
   * Return the value of `total`
   * @return { Number }
   */

function _getTotal(){
    return _total;
};
  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */

function _add(x){
    _total += x;
    return _total;
};
  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */

function _subtract (x){
    _total -= x;
    return _total;

};
  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */

function _multiply(x){
    _total *= x;
    return _total;

};
  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
function _divide(x){
    _total /= x;
    return _total;
};

  /**
   * Stores the value of `total` to `memory`
   */
function _save(){
  _memory = _total;
  return _memory;
}

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
function _recall(){
  return _memory;
}

  /**
   * Clear the value stored at `memory`
   */
function _clear (){
  _memory = 0;
  return _memory;
}

function  _valid(fn){
  return function(x){
    if (typeof x !== "number"){
      return "error";
    } else {
      return fn(x);
    }
  }
}

};

