const playPauseBtn = document.getElementById('play-pause-btn');
const audioPlayer = document.getElementById('audio-player');

function togglePlayPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.innerHTML = '&#9208'; // pause icon
    } else {
      audioPlayer.pause();
      playPauseBtn.innerHTML = '&#9654'; // play icon
    }
  }

playPauseBtn.addEventListener('click', togglePlayPause);



function showPopup(imageSrc) {
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popup-image");
    popup.style.display = "block";
    popupImage.src = imageSrc;
    popup.addEventListener("click", function() {
        popup.style.display = "none";
    });
}