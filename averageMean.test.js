const mean = require("./averageMean");

describe("mean", () => {
  it(" mean([10, 40, 100, 20]) to be 42.5", () => {
    const result = mean([10, 40, 100, 20]);
    expect(result).toBe(42.5);
  });
  it(" mean([1, 2, 4, 5]) to be 3", () => {
    const result = mean([1, 2, 4, 5]);
    expect(result).toBe(3);
  });
  it(" ([1, 2, 4, 5]) to contain 1 ", () => {
    expect([1, 2, 4, 5]).toContain(1);
  });
});
