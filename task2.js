function createEventListener() {
  const button = document.getElementById("click-me");
  button.addEventListener("click", () => {
    console.log("I was clicked!");
  });
}

function addHeader() {
  const h1 = document.createElement("h1");
  h1.textContent = "Welcome!";
  document.body.append(h1);
}

export { addHeader, createEventListener };
