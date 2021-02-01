var session_seconds = "00";
var session_minutes = 25;

// Audio files
var click_sound = new Audio("../sound/click.mp3");
var bell = new Audio("../sound/bell.mp3");

// Starting template for the timer
function template() {
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
}

var reset = false;

function stop_timer() {
  click_sound.play();
  reset = true;
}

function start_timer() {
  reset = false;
  click_sound.play();
  document.getElementById("done").innerHTML = "";
  document.getElementById("done").classList.remove("show_message");
  // Change the minutes and seconds to starting time
  session_minutes = 24;
  session_seconds = 59;

  // Add the seconds and minutes to the page
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  // Start the countdown
  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  // Functions
  // Function for minute counter
  function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }

  // Function for second counter
  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

    if (reset === true) {
      clearInterval(minutes_interval);
      clearInterval(seconds_interval);
      document.getElementById("minutes").innerHTML = "25";
      document.getElementById("seconds").innerHTML = "00";
    }

    // Check if the seconds and minutes counter has reached 0
    // If reached 0 then end the session
    if (session_seconds <= 0) {
      if (session_minutes <= 0) {
        // Clears the interval i.e. stops the counter
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        // Add the message to the html
        document.getElementById("done").innerHTML =
          "Session Completed!! Take 5 mins Break";

        // Make the html message div visible
        document.getElementById("done").classList.add("show_message");

        // PLay the bell sound to tell the end of session
        var bell = new Audio("../sound/bell.mp3");
        bell.play();
      }

      // Reset the session seconds to 60
      session_seconds = 60;
    }
  }
}
