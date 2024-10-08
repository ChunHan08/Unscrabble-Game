const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word"),
inputField = document.querySelector("input");

let correctWord, timer;

const initTimer = maxTime => {
  clearInterval(timer);
  timer = setInterval(() => {
    if(maxTime > 0) {
      maxTime--;
      return timeText.innerText = maxTime;
    }
    alert(`Timer off! ${correctWord.toUpperCase()} was the correct word`);
    initGame();
  }, 1000);
}

const initGame = () => {
  initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxLength", correctWord.length);
}
initGame();

const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if(!userWord) return alert("Enter a word to check");
  
  if (userWord !== correctWord) return alert(`BRO! ${userWord} is not the right word`);
  alert(`Congrats, YES!!! ${correctWord.toUpperCase()} is right word`);
  initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);