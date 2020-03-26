const timerButton = document.getElementById("timerButton");
const pauseButton = document.getElementById("pauseButton");
const teamOne = document.getElementById("teamOneScore");
const teamTwo = document.getElementById("teamTwoScore");
const teamOneInput = document.getElementById("teamOne");
const teamTwoInput = document.getElementById("teamTwo");
const tryy = document.getElementById("try");
const try2 = document.getElementById("try2");
const pen = document.getElementById("pen");
const pen2 = document.getElementById("pen2");
const con = document.getElementById("con");
const con2 = document.getElementById("con2");
const dg = document.getElementById("dg");
const dg2 = document.getElementById("dg2");
const tryStat = document.getElementById("tryStats");
const conStat = document.getElementById("conStats");
const penStat = document.getElementById("penStats");
const dgStat = document.getElementById("dgStats");
const tryStat2 = document.getElementById("tryStats2");
const conStat2 = document.getElementById("conStats2");
const penStat2 = document.getElementById("penStats2");
const dgStat2 = document.getElementById("dgStats2");

let t1s = document.getElementById("teamOneScore");
let t2s = document.getElementById("teamTwoScore");
let minutes = 0;
let seconds = 0;
let tryNo1 = 0;
let conNo1 = 0;
let penNo1 = 0;
let dgNo1 = 0;
let tryNo2 = 0;
let conNo2 = 0;
let penNo2 = 0;
let dgNo2 = 0;

let team1 = window.prompt("Please enter Team One's name: ");
let team2 = window.prompt("Please enter Team Two's name: ");

if (team1 != null) {
  teamOneInput.innerHTML = `${team1} Score`;
} else {
  teamOneInput.innerHTML = "Team One Score";
}
if (team2 != null) {
  teamTwoInput.innerHTML = `${team2} Score`;
} else {
  teamTwoInput.innerHTML = "Team Two Score";
}

timerButton.innerHTML = "Start Game";
pauseButton.innerHTML = "Pause Game";

timerButton.addEventListener("click", () => {
  // console.log("Button Clicked");
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

    if (minutes < 80) {
      pauseButton.addEventListener("click", () => {
        clearInterval(timer);
      });
    }

    if (minutes == 80) {
      clearInterval(timer);
      timerButton.innerHTML = "Game";
      pauseButton.innerHTML = "Over";
      document.getElementById("timerButton").disabled = true;
      document.getElementById("try").disabled = true;
      document.getElementById("try2").disabled = true;
      document.getElementById("pen").disabled = true;
      document.getElementById("pen2").disabled = true;
      document.getElementById("dg").disabled = true;
      document.getElementById("dg2").disabled = true;
    }
    document.getElementById("timer").innerHTML = minutes + "m" + seconds + "s";
  }, 10);

  // let pause = () => {

  // }
});

let teamOneScore = 0;
let teamTwoScore = 0;

tryy.addEventListener("click", () => {
  teamOneScore += 5;
  t1s.innerText = teamOneScore;
  tryNo1++;
  tryStat.textContent = tryNo1;
  document.getElementById("con").disabled = false;

  let paragraph = document.createElement("P");
  paragraph.innerHTML = `Try Scored at ${minutes}m ${seconds}s`;
  document.getElementById("teamOneCommentary").appendChild(paragraph);
});
try2.addEventListener("click", () => {
  teamTwoScore += 5;
  t2s.innerText = teamTwoScore;
  tryNo2++;
  tryStat2.textContent = tryNo2;
  document.getElementById("con2").disabled = false;

  let paragraph = document.createElement("P");
  paragraph.innerHTML = `Try Scored at ${minutes}m ${seconds}s`;
  document.getElementById("teamTwoCommentary").appendChild(paragraph);
});
pen.addEventListener("click", () => {
  teamOneScore += 3;
  t1s.innerText = teamOneScore;
  penNo1++;
  penStat.textContent = penNo1;
  document.getElementById("con").disabled = true;

  let paragraph = document.createElement("P");
  paragraph.innerHTML = `Penalty Scored at ${minutes}m ${seconds}s`;
  document.getElementById("teamOneCommentary").appendChild(paragraph);
});
pen2.addEventListener("click", () => {
  teamTwoScore += 3;
  t2s.innerText = teamTwoScore;
  penNo2++;
  penStat2.textContent = penNo2;
  document.getElementById("con2").disabled = true;

  let paragraph = document.createElement("P");
  paragraph.innerHTML = `Penalty Scored at ${minutes}m ${seconds}s`;
  document.getElementById("teamTwoCommentary").appendChild(paragraph);
});
con.addEventListener("click", () => {
  teamOneScore += 2;
  t1s.innerText = teamOneScore;
  conNo1++;
  conStat.textContent = conNo1;
  document.getElementById("con").disabled = true;

  let paragraph = document.createElement("P");
  paragraph.innerHTML = `Conversion Scored at ${minutes}m ${seconds}s`;
  document.getElementById("teamOneCommentary").appendChild(paragraph);
});
con2.addEventListener("click", () => {
  teamTwoScore += 2;
  t2s.innerText = teamTwoScore;
  conNo2++;
  conStat2.textContent = conNo2;
  document.getElementById("con2").disabled = true;

  let paragraph = document.createElement("P");
  paragraph.innerHTML = `Conversion Scored at ${minutes}m ${seconds}s`;
  document.getElementById("teamTwoCommentary").appendChild(paragraph);
});
dg.addEventListener("click", () => {
  teamOneScore += 3;
  t1s.innerText = teamOneScore;
  dgNo1++;
  dgStat.textContent = dgNo1;
  document.getElementById("con").disabled = true;

  let paragraph = document.createElement("P");
  paragraph.innerHTML = `Drop Goal Scored at ${minutes}m ${seconds}s`;
  document.getElementById("teamOneCommentary").appendChild(paragraph);
});
dg2.addEventListener("click", () => {
  teamTwoScore = teamTwoScore + 3;
  t2s.innerText = teamTwoScore;
  dgNo2++;
  dgStat2.textContent = dgNo2;
  document.getElementById("con2").disabled = true;

  let paragraph = document.createElement("P");
  paragraph.innerHTML = `Drop Goal Scored at ${minutes}m ${seconds}s`;
  document.getElementById("teamTwoCommentary").appendChild(paragraph);
});
