const timerButton = document.getElementById("timerButton");
const teamOne = document.getElementById("teamOneScore");
const teamTwo = document.getElementById("teamTwoScore");
const tryy = document.getElementById("try");
const try2 = document.getElementById("try2");
const pen = document.getElementById("pen");
const pen2 = document.getElementById("pen2");
const con = document.getElementById("con");
const con2 = document.getElementById("con2");
const dg = document.getElementById("dg");
const dg2 = document.getElementById("dg2");

let t1s = document.getElementById("teamOneScore");
let t2s = document.getElementById("teamTwoScore");
let minutes = 0;
let seconds = 0;

timerButton.addEventListener("click", () => {
  console.log("Button Clicked");
  document.getElementById("try").disabled = false;
  document.getElementById("try2").disabled = false;
  document.getElementById("pen").disabled = false;
  document.getElementById("pen2").disabled = false;
  document.getElementById("dg").disabled = false;
  document.getElementById("dg2").disabled = false;
  let timer = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes == 80) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "Game over";
      document.getElementById("try").disabled = true;
      document.getElementById("try2").disabled = true;
      document.getElementById("pen").disabled = true;
      document.getElementById("pen2").disabled = true;
      document.getElementById("dg").disabled = true;
      document.getElementById("dg2").disabled = true;
    }
    document.getElementById("timer").innerHTML = minutes + "m" + seconds + "s";
  }, 10);
});

let teamOneScore = 0;
let teamTwoScore = 0;

tryy.addEventListener("click", () => {
  teamOneScore += 5;
  t1s.innerText = teamOneScore;
  document.getElementById("con").disabled = false;

  let paragraph = document.createElement("P");
    paragraph.innerHTML = "Team One Scored a Try";
    document.getElementById("teamOneCommentary").appendChild(paragraph);
});
try2.addEventListener("click", () => {
  teamTwoScore += 5;
  t2s.innerText = teamTwoScore;
  document.getElementById("con2").disabled = false;

  let paragraph = document.createElement("P");
  paragraph.innerHTML = "Team Two Scored a Try";
  document.getElementById("teamTwoCommentary").appendChild(paragraph);
});
pen.addEventListener("click", () => {
  teamOneScore += 3;
  t1s.innerText = teamOneScore;

  let paragraph = document.createElement("P");
  paragraph.innerHTML = "Team One Scored a Penalty";
  document.getElementById("teamOneCommentary").appendChild(paragraph);
});
pen2.addEventListener("click", () => {
  teamTwoScore += 3;
  t2s.innerText = teamTwoScore;

  let paragraph = document.createElement("P");
  paragraph.innerHTML = "Team Two Scored a Penalty";
  document.getElementById("teamTwoCommentary").appendChild(paragraph);
});
con.addEventListener("click", () => {
  teamOneScore += 2;
  t1s.innerText = teamOneScore;
  document.getElementById("con").disabled = true;

  let paragraph = document.createElement("P");
  paragraph.innerHTML = "Team One Scored a Conversion";
  document.getElementById("teamOneCommentary").appendChild(paragraph);
});
con2.addEventListener("click", () => {
  teamTwoScore += 2;
  t2s.innerText = teamTwoScore;
  document.getElementById("con2").disabled = true;

  let paragraph = document.createElement("P");
  paragraph.innerHTML = "Team Two Scored a Conversion";
  document.getElementById("teamTwoCommentary").appendChild(paragraph);
});
dg.addEventListener("click", () => {
  teamOneScore += 3;
  t1s.innerText = teamOneScore;

  let paragraph = document.createElement("P");
  paragraph.innerHTML = "Team One Scored a Drop Goal";
  document.getElementById("teamOneCommentary").appendChild(paragraph);
});
dg2.addEventListener("click", () => {
  teamTwoScore = teamTwoScore + 3;
  t2s.innerText = teamTwoScore;

  let paragraph = document.createElement("P");
  paragraph.innerHTML = "Team Two Scored a Drop Goal";
  document.getElementById("teamTwoCommentary").appendChild(paragraph);
});
