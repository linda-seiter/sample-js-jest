import { myVar, sum, greet } from "./task1.js";

describe("It can test plain JS", () => {
  it("tests a variable", () => {
    expect(myVar).toBe("Hello, world!");
  });

  it("tests a function return", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("tests console.log", () => {
    const logSpy = jest.spyOn(global.console, "log");
    greet("Fred");
    expect(logSpy).toHaveBeenCalledWith("Hello Fred!");
  });
});
