window.onload = displayClock();

function displayClock() {
  var now = new Date();
  var time = now.toLocaleTimeString();
  var day = now.toLocaleDateString(undefined, { weekday: "long" });

  document.getElementById("datetime").innerHTML = day + " : " + time;
  setTimeout(displayClock, 1000);
}
