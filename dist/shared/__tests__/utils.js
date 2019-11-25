"use strict";

var _utils = require("../utils");

/* eslint-disable comma-dangle */
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
describe('appendInputValue', function () {
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
describe('isPositiveInteger', function () {
  it('should not accept e', function () {
    expect((0, _utils.isPositiveInteger)('e')).toBe(false);
  });
  it('should not accept +', function () {
    expect((0, _utils.isPositiveInteger)('+')).toBe(false);
  });
  it('should not accept .', function () {
    expect((0, _utils.isPositiveInteger)('.')).toBe(false);
  });
  it('should not accept ,', function () {
    expect((0, _utils.isPositiveInteger)(',')).toBe(false);
  });
  it('should accept 1', function () {
    expect((0, _utils.isPositiveInteger)('1')).toBe(true);
  });
  it('should accept 9', function () {
    expect((0, _utils.isPositiveInteger)('9')).toBe(true);
  });
  it('should accept 0', function () {
    expect((0, _utils.isPositiveInteger)('0')).toBe(true);
  });
});