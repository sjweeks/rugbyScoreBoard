const timerNumber = document.getElementById("timerFunc");
const timerButton = document.getElementsByClassName("timerButton")

// let timerStart = new Timer();
//     timerStart.start();
//     timerStart.addEventListener('secondsUpdated', function (e) {
//         timer.html(timerStart.getTimeValues().toString());
// });


// let endDate = new Time("80:00").getTime();

// let timer = setInterval(function() {

//     let now = newDate().getTime();
//     let t = endDate - now;
    
//     if (t >= 0) {

//         let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//         let secs = Math.floor((t % (1000 * 60)) / 1000);

//         timerNumber.textContent = ("0"+mins).slice(-2) +
//         "<span class='label'>MIN(S)</span>";
    
//         timerNumber.textContent= ("0"+secs).slice(-2) +
//         "<span class='label'>SEC(S)</span>";
    
//     } else {
//         timerButton.textContent = "The countdown is over!";

//     }
    
// }, 1000);

function timer(seconds, cb) {
    var remaningTime = seconds;
    window.setTimeout(function() {
      cb();
      console.log(remaningTime);
      if (remaningTime > 0) {
        timer(remaningTime - 1, cb); 
      }
    }, 1000);
  }
  
  var callback = function() {
    console.log('callback');
  };
  
  timer(90, callback);