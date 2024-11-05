const inputElement = document.querySelector(".input");
// console.log(inputElement.checked);
// @ts-ignore
inputElement.checked = false;

const bodyElement = document.querySelector("body");

const updateBody = () => {
  // @ts-ignore
  if (inputElement.checked) {
    // @ts-ignore
    bodyElement.style.background = "black";
  } else {
    // @ts-ignore
    bodyElement.style.background = "white";
  }
};

updateBody();

inputElement?.addEventListener("input", () => {
  updateBody();
});
