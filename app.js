const newColorBtnElement = document.getElementById("new-color-button");
const currentColorElement = document.getElementById("current-color");

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F

const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

newColorBtnElement.addEventListener("click", () => {
  const randomHex = "#" + getRandomHexString(6);
  document.body.style.backgroundColor = randomHex;
  currentColorElement.style.color = randomHex;
});

let getRandomHexValue = () => {
  const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
  const randomHexValue = hexValues[randomIndexPosition];
  return randomHexValue;
};

let getRandomHexString = (stringLength) => {
  let hexString = "";
  for (let i = 0; i < stringLength; i++) {
    hexString += getRandomHexValue();
  }
  return hexString;
};
