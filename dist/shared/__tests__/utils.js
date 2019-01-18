"use strict";

var _utils = require("../utils");

/* eslint-disable comma-dangle */
describe('appendInputValue', function () {
  var defaultArgs = {
    event: {
      target: {
        value: '2',
        max: '12',
        min: '1'
      },
      key: '2'
    },
    onChange: jest.fn()
  };
  it('set value to max when value is higher than max', function () {
    defaultArgs.event.target.value = '20';
    var event = defaultArgs.event,
        onChange = defaultArgs.onChange;
    (0, _utils.appendInputValue)(event, onChange);
    expect(event.target.value).toEqual('12');
  });
  it('triggers onChange correctly when value is higher than max', function () {
    defaultArgs.event.target.value = '20';
    var event = defaultArgs.event,
        onChange = defaultArgs.onChange;
    (0, _utils.appendInputValue)(event, onChange);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith(event);
  });
  it('find next input when key is higher than first character of max', function () {
    defaultArgs.event.target.value = '2';
    var event = defaultArgs.event,
        onChange = defaultArgs.onChange;
    (0, _utils.appendInputValue)(event, onChange);
  });
});