const isLeap = require("./leapYear");

describe("leapyr", () => {
  it("leapyr", () => {
    const result = isLeap(2140);
    expect(result).toBeTruthy();
  });
  it("leapyr", () => {
    const result = isLeap(2142);
    expect(result).toBeFalsy();
  });
  it("leapyr", () => {
    const result = isLeap("120r");
    expect(result).toBeFalsy();
  });
});
