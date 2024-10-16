const audio = document.getElementById("audio");
const progress = document.getElementById("Progress");
const playPauseBtn = document.getElementById("CntlIcn");
const rewindBtn = document.querySelector(".controls div:first-child");
const forwardBtn = document.querySelector(".controls div:last-child");

// Play/Pause functionality
function playPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}

// Update progress slider
audio.addEventListener("timeupdate", () => {
  const percentage = (audio.currentTime / audio.duration) * 100;
  progress.value = percentage || 0; // Prevents NaN when audio is not loaded
});

// Set audio time based on slider
progress.addEventListener("input", () => {
  const newTime = (progress.value / 100) * audio.duration;
  audio.currentTime = newTime;
});

// Rewind functionality
rewindBtn.addEventListener("click", () => {
  audio.currentTime = Math.max(0, audio.currentTime - 10); // Rewind 10 seconds
});

// Forward functionality
forwardBtn.addEventListener("click", () => {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 10); // Forward 10 seconds
});

// Optional: Pause audio when finished
audio.addEventListener("ended", () => {
  playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>'; // Change to play icon
});
