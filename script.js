let startTime;
let elapsedTime = 0;
let intervalId;
let p = document.querySelector('p');

// Function to format time as HH:MM:SS:MSMS
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    const milliseconds = Math.floor((ms % 1000) / 10).toString().padStart(2, '0'); // Two-digit milliseconds
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

// Start the stopwatch
function startStopwatch() {
    if (!intervalId) { // Only start if not already running
        startTime = Date.now() - elapsedTime; // Adjust for elapsed time if resumed
        intervalId = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById('time').textContent = formatTime(elapsedTime);
        }, 10); // Update every 10 ms to show milliseconds
    }
}

// Stop the stopwatch
function stopStopwatch() {
    p.innerHTML += `<br>${formatTime(elapsedTime)}`;
    clearInterval(intervalId);
    intervalId = null; // Reset intervalId to indicate stopwatch is stopped
}

// Reset the stopwatch
function resetStopwatch() {
    p.innerText = "";
    clearInterval(intervalId);
    intervalId = null;
    elapsedTime = 0;
    document.getElementById('time').textContent = "00:00:00:00";
}
