"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _makeEventProps = _interopRequireDefault(require("make-event-props"));

var _mergeClassNames = _interopRequireDefault(require("merge-class-names"));

var _detectElementOverflow = _interopRequireDefault(require("detect-element-overflow"));

var _entry = _interopRequireDefault(require("react-calendar/dist/entry.nostyle"));

var _DateInput = _interopRequireDefault(require("./DateInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseClassName = 'react-date-picker';

var DatePicker =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DatePicker, _PureComponent);

  function DatePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOutsideAction", function (event) {
      if (_this.wrapper && !_this.wrapper.contains(event.target)) {
        _this.closeCalendar();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openCalendar", function () {
      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeCalendar", function () {
      _this.setState(function (prevState) {
        if (!prevState.isOpen) {
          return null;
        }

        return {
          isOpen: false
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleCalendar", function () {
      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (value) {
      var closeCalendar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.setState({
        isOpen: !closeCalendar
      });

      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(value);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function (event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onFocus = _this$props.onFocus;

      if (onFocus) {
        onFocus(event);
      } // Internet Explorer still fires onFocus on disabled elements


      if (disabled) {
        return;
      }

      _this.openCalendar();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "stopPropagation", function (event) {
      return event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clear", function () {
      return _this.onChange(null);
    });

    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.onOutsideAction);
      document.addEventListener('focusin', this.onOutsideAction);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.onOutsideAction);
      document.removeEventListener('focusin', this.onOutsideAction);
    }
  }, {
    key: "renderInputs",
    value: function renderInputs() {
      var _this2 = this;

      var _this$props2 = this.props,
          calendarIcon = _this$props2.calendarIcon,
          clearIcon = _this$props2.clearIcon,
          disabled = _this$props2.disabled,
          locale = _this$props2.locale,
          maxDate = _this$props2.maxDate,
          maxDetail = _this$props2.maxDetail,
          minDate = _this$props2.minDate,
          name = _this$props2.name,
          returnValue = _this$props2.returnValue,
          required = _this$props2.required,
          showLeadingZeros = _this$props2.showLeadingZeros,
          value = _this$props2.value;
      var isOpen = this.state.isOpen;

      var _concat = [].concat(value),
          _concat2 = _slicedToArray(_concat, 1),
          valueFrom = _concat2[0];

      return _react.default.createElement("div", {
        className: "".concat(baseClassName, "__wrapper")
      }, _react.default.createElement(_DateInput.default, {
        className: "".concat(baseClassName, "__inputGroup"),
        disabled: disabled,
        locale: locale,
        isCalendarOpen: isOpen,
        maxDate: maxDate,
        maxDetail: maxDetail,
        minDate: minDate,
        name: name,
        onChange: this.onChange,
        returnValue: returnValue,
        required: required,
        showLeadingZeros: showLeadingZeros,
        value: valueFrom
      }), clearIcon !== null && _react.default.createElement("button", {
        className: "".concat(baseClassName, "__clear-button ").concat(baseClassName, "__button"),
        disabled: disabled,
        onClick: this.clear,
        onFocus: function onFocus(event) {
          _this2.closeCalendar();

          _this2.stopPropagation(event);
        },
        type: "button"
      }, clearIcon), calendarIcon !== null && _react.default.createElement("button", {
        tabIndex: "-1",
        className: "".concat(baseClassName, "__calendar-button ").concat(baseClassName, "__button"),
        disabled: disabled,
        onClick: this.toggleCalendar,
        onFocus: this.stopPropagation,
        onBlur: this.resetValue,
        type: "button"
      }, calendarIcon));
    }
  }, {
    key: "renderCalendar",
    value: function renderCalendar() {
      var _this3 = this;

      var isOpen = this.state.isOpen;

      if (isOpen === null) {
        return null;
      }

      var _this$props3 = this.props,
          calendarClassName = _this$props3.calendarClassName,
          datePickerClassName = _this$props3.className,
          onChange = _this$props3.onChange,
          value = _this$props3.value,
          calendarProps = _objectWithoutProperties(_this$props3, ["calendarClassName", "className", "onChange", "value"]);

      var className = "".concat(baseClassName, "__calendar");
      return _react.default.createElement("div", {
        className: (0, _mergeClassNames.default)(className, "".concat(className, "--").concat(isOpen ? 'open' : 'closed')),
        ref: function ref(_ref) {
          if (!_ref || !isOpen) {
            return;
          }

          _ref.classList.remove("".concat(className, "--above-label"));

          var collisions = (0, _detectElementOverflow.default)(_ref, document.body);

          if (collisions.collidedBottom) {
            var overflowTopAfterChange = collisions.overflowTop + _ref.clientHeight + _this3.wrapper.clientHeight; // If it's going to make situation any better, display the calendar above the input

            if (overflowTopAfterChange < collisions.overflowBottom) {
              _ref.classList.add("".concat(className, "--above-label"));
            }
          }
        }
      }, _react.default.createElement(_entry.default, _extends({
        className: calendarClassName,
        onChange: this.onChange,
        value: value || null
      }, calendarProps)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props4 = this.props,
          className = _this$props4.className,
          disabled = _this$props4.disabled;
      var isOpen = this.state.isOpen;
      return _react.default.createElement("div", _extends({
        className: (0, _mergeClassNames.default)(baseClassName, "".concat(baseClassName, "--").concat(isOpen ? 'open' : 'closed'), "".concat(baseClassName, "--").concat(disabled ? 'disabled' : 'enabled'), className)
      }, this.eventProps, {
        onFocus: this.onFocus,
        ref: function ref(_ref2) {
          if (!_ref2) {
            return;
          }

          _this4.wrapper = _ref2;
        }
      }), this.renderInputs(), this.renderCalendar());
    }
  }, {
    key: "eventProps",
    get: function get() {
      return (0, _makeEventProps.default)(this.props);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isOpen !== prevState.isOpenProps) {
        return {
          isOpen: nextProps.isOpen,
          isOpenProps: nextProps.isOpen
        };
      }

      return null;
    }
  }]);

  return DatePicker;
}(_react.PureComponent);

exports.default = DatePicker;

var CalendarIcon = _react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "19",
  height: "19",
  viewBox: "0 0 19 19"
}, _react.default.createElement("g", {
  stroke: "black",
  strokeWidth: "2"
}, _react.default.createElement("rect", {
  width: "15",
  height: "15",
  x: "2",
  y: "2",
  fill: "none"
}), _react.default.createElement("line", {
  x1: "6",
  y1: "0",
  x2: "6",
  y2: "4"
}), _react.default.createElement("line", {
  x1: "13",
  y1: "0",
  x2: "13",
  y2: "4"
})));

var ClearIcon = _react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "19",
  height: "19",
  viewBox: "0 0 19 19"
}, _react.default.createElement("g", {
  stroke: "black",
  strokeWidth: "2"
}, _react.default.createElement("line", {
  x1: "4",
  y1: "4",
  x2: "15",
  y2: "15"
}), _react.default.createElement("line", {
  x1: "15",
  y1: "4",
  x2: "4",
  y2: "15"
})));

DatePicker.defaultProps = {
  calendarIcon: CalendarIcon,
  clearIcon: ClearIcon,
  isOpen: null,
  returnValue: 'start'
};
DatePicker.propTypes = _objectSpread({}, _entry.default.propTypes, {
  calendarClassName: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  calendarIcon: _propTypes.default.node,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  clearIcon: _propTypes.default.node,
  disabled: _propTypes.default.bool,
  isOpen: _propTypes.default.bool,
  name: _propTypes.default.string,
  returnValue: _propTypes.default.oneOf(['start', 'end', 'range']),
  required: _propTypes.default.bool,
  showLeadingZeros: _propTypes.default.bool
});
(0, _reactLifecyclesCompat.polyfill)(DatePicker);