import fs from "fs";
import path from "path";
import { addHeader, createEventListener } from "./task2.js";

const html = fs.readFileSync(path.resolve(__dirname, "./task2.html"), "utf-8");

const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf-8");

document.documentElement.innerHTML = html;
const style = document.createElement("style");
style.innerHTML = css;
document.head.append(style);

describe("query DOM", () => {
  it("has a button", () => {
    const button = document.querySelector("button");
    expect(button).not.toBe(null);
  });
});

describe("it can test DOM manipulation", () => {
  it("adds an h1 to the DOM", () => {
    const noHeader = document.querySelector("h1");
    expect(noHeader).toBe(null);
    addHeader();
    const h1 = document.querySelector("h1");
    expect(h1).not.toBe(null);
    expect(h1.textContent).toBe("Welcome!");
  });
});

describe("can test event listeners", () => {
  it("runs a console.log when clicked", () => {
    const logSpy = jest.spyOn(global.console, "log");
    createEventListener();
    const button = document.getElementById("click-me");
    button.click();
    expect(logSpy).toHaveBeenCalledWith("I was clicked!");
  });
});
