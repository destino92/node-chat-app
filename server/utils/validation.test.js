const expect = require('expect');

// import isRealString
var {isRealString} = require('./validation');

describe('isRealString', () => {

  it('should reject non-string values', () => {
    var name = 123;

    expect(isRealString(name)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var name = '      ';

    expect(isRealString(name)).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    var name = '  destino  ';

    expect(isRealString(name)).toBe(true);
  });
});
