// Function 1: Format time into MM:SS (example: 30 sec = "00:30")
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Function 2: Display the time on screen
function showTime(timeText) {
  document.getElementById("timer").textContent = timeText;
}

// Function 3: Stop the timer and show "Time’s up!"
function endCountdown(timer) {
  clearInterval(timer);
  document.getElementById("timer").textContent = "Time’s up!";
}

// Function 4: Decrease seconds and update display
function updateCountdown(timer, remainingTime) {
  remainingTime.value--;
  if (remainingTime.value < 0) {
    endCountdown(timer);
  } else {
    showTime(formatTime(remainingTime.value));
  }
}

// Function 5: Main function that starts the countdown
function startCountdown() {
  let totalSeconds = 30; // 30 seconds = 30 seconds
  showTime(formatTime(totalSeconds));

  // Use an object so remainingTime.value can be changed inside the interval
  const remainingTime = { value: totalSeconds };

  const timer = setInterval(() => {
    updateCountdown(timer, remainingTime);
  }, 1000);
}
