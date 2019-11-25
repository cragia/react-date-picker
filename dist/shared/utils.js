"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "between", {
  enumerable: true,
  get: function get() {
    return _utils.between;
  }
});
exports.updateInputWidth = exports.appendInputValue = exports.select = exports.focus = exports.max = exports.min = exports.findNextInput = exports.findPreviousInput = exports.isPositiveInteger = void 0;

var _utils = require("react-calendar/dist/shared/utils");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var isValidNumber = function isValidNumber(a) {
  return typeof a === 'number' && !isNaN(a);
};

var isPositiveInteger = function isPositiveInteger(a) {
  var n = Math.floor(Number(a));
  return n !== Infinity && String(n) === a && n >= 0;
};

exports.isPositiveInteger = isPositiveInteger;

var findInput = function findInput(sibling) {
  return function (element) {
    var foundElement = element[sibling]; // Divider between inputs

    if (!foundElement) {
      return null;
    }

    return foundElement[sibling]; // Actual input
  };
};

var shouldFocusNextInput = function shouldFocusNextInput(key, value, maxValue) {
  return Number(value) > Number(maxValue) || Number(key) > Number(maxValue.charAt(0)) || value.length >= maxValue.length;
};

var findPreviousInput = findInput('previousElementSibling');
exports.findPreviousInput = findPreviousInput;
var findNextInput = findInput('nextElementSibling');
exports.findNextInput = findNextInput;

var min = function min() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Math.min.apply(Math, _toConsumableArray(args.filter(isValidNumber)));
};

exports.min = min;

var max = function max() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return Math.max.apply(Math, _toConsumableArray(args.filter(isValidNumber)));
};

exports.max = max;

var focus = function focus(element) {
  return element && element.focus();
};

exports.focus = focus;

var select = function select(element) {
  return element && element.select();
};

exports.select = select;

var appendInputValue = function appendInputValue(event, onChange) {
  var target = event.target,
      _event$target = event.target,
      value = _event$target.value,
      maxValue = _event$target.max,
      key = event.key;

  if (!isPositiveInteger(key)) {
    return;
  }

  if (shouldFocusNextInput(key, value, maxValue)) {
    var nextInput = findNextInput(target);

    if (Number(value) > Number(maxValue)) {
      target.value = maxValue;
      onChange(event);
    }

    focus(nextInput);
  }
};

exports.appendInputValue = appendInputValue;

var updateInputWidth = function updateInputWidth(element) {
  var span = document.createElement('span');
  span.innerHTML = element.value || element.placeholder;
  var container = element.parentElement;
  container.appendChild(span);

  var _span$getBoundingClie = span.getBoundingClientRect(),
      width = _span$getBoundingClie.width;

  element.style.width = "".concat(Math.ceil(width), "px");
  container.removeChild(span);
};

exports.updateInputWidth = updateInputWidth;