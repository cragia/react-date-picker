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
  describe('when value is higher than max', function () {
    var event = defaultArgs.event,
        onChange = defaultArgs.onChange;
    beforeAll(function () {
      defaultArgs.event.target.value = '20';
      (0, _utils.appendInputValue)(event, onChange);
    });
    it('set value to max', function () {
      expect(event.target.value).toEqual('12');
    });
    it('triggers onChange correctly', function () {
      expect(onChange).toHaveBeenCalled();
      expect(onChange).toHaveBeenCalledWith(event);
    });
  });
});