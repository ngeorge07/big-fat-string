"use strict";

const btn = document.querySelector("#generate");
const optionsList = document.querySelector("#option");
const options = {
  1: function (string) {
    string = `${string.substring(0, 1).toUpperCase()}${string
      .substring(1, string.length)
      .toLowerCase()}`;

    return string;
  },
  2: function (string) {
    const names = string.split(" ");
    return names[0];
  },
  3: function (string) {
    const names = string.split(" ");
    return names[0].length;
  },
  4: function (string) {
    const names = string.split(" ");
    const middleArray = names.slice(1, names.length - 1);
    const middleName = middleArray.join(" ");

    const startPosition = string.indexOf(middleName);
    const endPoistion = startPosition + middleName.length - 1;

    return `${middleName} Start: ${startPosition} End: ${endPoistion}`;
  },
  5: function (string) {
    if (string.endsWith(".jpg") || string.endsWith(".png")) {
      return (string = "Image");
    }
    return (string = "not image");
  },
  6: function (string) {
    string = "*".repeat(string.length);
    return string;
  },
  7: function (string) {
    string = `${string.substring(0, 2)}${string
      .substring(2, 3)
      .toUpperCase()}${string.substring(3)}`;
    return string;
  },
  8: function (string) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === " " || string[i] === ",") {
        console.log(string[i + 1]);
        string = string.replace(string[i + 1], string[i + 1].toUpperCase());
      }
    }
    return string;
  },
};

btn.addEventListener("click", outputString);

function outputString() {
  const input = document.querySelector("#input").value;
  const output = document.querySelector("#output");
  const selected = optionsList.options[optionsList.selectedIndex].value;

  output.value = options[selected](input);
}
