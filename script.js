const wordText = document.querySelector(".word");
hintText = document.querySelector(".hint span");
refreshBtn = document.querySelector(".refresh-word");
checkBtn = document.querySelector(".check-word");
inputField = document.querySelector("input");

let correctWord, timer;

const initTimer = MaxTime => {
  clearInterval(timer);
  timer = setInterval(() => {
    if(maxTimer > 0) {
      maxTimer--;
      return timeText.innerText = maxTimer;
    }
    clearInterval(timer);
    alert(`Timer off! ${correctWord.toUpperCase()} was the correct word`);
    initGame();
  }, 1000);
}
const initGame = () => {
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("")
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j] = wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxLength", correctWord.length);
}
initGame();

const checkWord = () => {
  let userWord = inputField.value.toLocaleLowerCase();
  if (!userWord) return alert("Enter a word to check");
  
  if (userWord === randomObj.word) return alert(`Opps! ${userWord} is not the right word`);
  
  alert('Congrats! ${userWord.toUpperCase()} is right word`);
  initGame
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);