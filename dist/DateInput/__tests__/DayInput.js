"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _DayInput = _interopRequireDefault(require("../DayInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable comma-dangle */
describe('DayInput', function () {
  var defaultProps = {
    className: 'className',
    onChange: function onChange() {}
  };
  it('renders an input', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, defaultProps));
    var input = component.find('input');
    expect(input).toHaveLength(1);
  });
  it('renders "0" given showLeadingZeros if day is <10', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, _extends({}, defaultProps, {
      showLeadingZeros: true,
      value: 9
    })));
    var input = component.find('input');
    expect(component.text()).toContain('0');
    expect(input.prop('className')).toContain("".concat(defaultProps.className, "__input--hasLeadingZero"));
  });
  it('does not render "0" given showLeadingZeros if day is >=10', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, _extends({}, defaultProps, {
      showLeadingZeros: true,
      value: 10
    })));
    var input = component.find('input');
    expect(component.text()).not.toContain('0');
    expect(input.prop('className')).not.toContain("".concat(defaultProps.className, "__input--hasLeadingZero"));
  });
  it('does not render "0" if not given showLeadingZeros', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, _extends({}, defaultProps, {
      value: 9
    })));
    var input = component.find('input');
    expect(component.text()).not.toContain('0');
    expect(input.prop('className')).not.toContain("".concat(defaultProps.className, "__input--hasLeadingZero"));
  });
  it('has proper name defined', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('name')).toBe('day');
  });
  it('displays given value properly', function () {
    var value = 11;
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, _extends({}, defaultProps, {
      value: value
    })));
    var input = component.find('input');
    expect(input.prop('value')).toBe(value);
  });
  it('does not disable input by default', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('disabled')).toBeFalsy();
  });
  it('disables input given disabled flag', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, _extends({}, defaultProps, {
      disabled: true
    })));
    var input = component.find('input');
    expect(input.prop('disabled')).toBeTruthy();
  });
  it('is not required input by default', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('required')).toBeFalsy();
  });
  it('required input given required flag', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, _extends({}, defaultProps, {
      required: true
    })));
    var input = component.find('input');
    expect(input.prop('required')).toBeTruthy();
  });
  it('calls itemRef properly', function () {
    var itemRef = jest.fn();
    (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, _extends({}, defaultProps, {
      itemRef: itemRef
    })));
    expect(itemRef).toHaveBeenCalled();
    expect(itemRef).toHaveBeenCalledWith(expect.any(HTMLInputElement), 'day');
  });
  it('has min = 1 by default', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, defaultProps));
    var input = component.find('input');
    expect(input.prop('min')).toBe(1);
  });
  it('has min = 1 given minDate in a past month', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, _extends({}, defaultProps, {
      year: 2018,
      month: 1,
      minDate: new Date(2017, 11, 15)
    })));
    var input = component.find('input');
    expect(input.prop('min')).toBe(1);
  });
  it('has min = (day in minDate) given minDate in a current month', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, _extends({}, defaultProps, {
      year: 2018,
      month: 1,
      minDate: new Date(2018, 0, 15)
    })));
    var input = component.find('input');
    expect(input.prop('min')).toBe(15);
  });
  it('has max = (number of days in current month) by default', function () {
    var numberOfDaysInJanuary2018 = new Date(2018, 1, 0).getDate();
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, _extends({}, defaultProps, {
      year: 2018,
      month: 1
    })));
    var input = component.find('input');
    expect(input.prop('max')).toBe(numberOfDaysInJanuary2018);
  });
  it('has max = (number of days in current month) given maxDate in a future month', function () {
    var numberOfDaysInJanuary2018 = new Date(2018, 1, 0).getDate();
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, _extends({}, defaultProps, {
      year: 2018,
      month: 1,
      maxDate: new Date(2018, 1, 15)
    })));
    var input = component.find('input');
    expect(input.prop('max')).toBe(numberOfDaysInJanuary2018);
  });
  it('has max = (day in maxDate) given maxDate in a current month', function () {
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, _extends({}, defaultProps, {
      year: 2018,
      month: 1,
      maxDate: new Date(2018, 0, 15)
    })));
    var input = component.find('input');
    expect(input.prop('max')).toBe(15);
  });
  it('triggers onChange correctly when key up with value higher than max', function () {
    var onKeyUp = jest.fn();
    var onChange = jest.fn();
    var otherProps = {
      onChange: onChange,
      onKeyUp: onKeyUp
    };
    var target = {
      max: '5',
      min: '1',
      value: '9'
    };
    var event = {
      key: target.value,
      target: target
    };
    var component = (0, _enzyme.mount)(_react.default.createElement(_DayInput.default, _extends({}, defaultProps, otherProps, {
      year: 2018,
      month: 1,
      maxDate: new Date(2018, 0, 15)
    })));
    component.simulate('keyUp', event);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(expect.objectContaining(event));
  });
});