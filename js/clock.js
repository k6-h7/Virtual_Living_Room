const clockElement = document.getElementById("clock");
const calendarElement = document.getElementById("calendar");

function updateDateTime() {
  const now = new Date();
  clockElement.textContent = `${now.toLocaleTimeString()}`;
  calendarElement.textContent = `${now.toLocaleDateString()}`;
}

setInterval(updateDateTime, 1000);