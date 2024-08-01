const initGame = () => {
  const word = getRandomWord();
  const scrambledWord = scrambleWord(word);
  const time = 30;
  const timeInterval = setInterval(updateTimer, 1000);
  const wordElement = document.querySelector(".word");
  const hintElement = document.querySelector(".hint span");
  const timeElement = document.querySelector(".time b");
  const inputElement = document.querySelector("input");
  const checkButton = document.querySelector(".check-word");
}