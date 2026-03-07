const songs = [
  { 
    title: "🎵 Still 3PM", 
    file: "만약 네가 4시에 온다면 Still 3PM.mp3", 
    cover: "https://i.pinimg.com/originals/94/c2/45/94c2451c86aa613788e342a6e48312af.gif"
  },
  { 
    title: "🎵 Steady", 
    file: "NCT WISH (엔시티 위시) 'Steady' Official Audio.mp3", 
    cover: "https://i.pinimg.com/originals/3f/07/6b/3f076b45a3159f8d4c30ae3578847c9c.gif"
  },
  { 
    title: "🎵 NASA", 
    file: "NASA.mp3", 
    cover: "https://i.pinimg.com/originals/54/47/4e/54474e4604471b331996ee9bffb4019f.gif"
  }
];

let currentIndex = 0;

function openPlayer() {
  window.open(
    'player.html',
    '_blank',
    'width=430,height=620,resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no'
  );
}

// 플레이리스트 목록 생성
function renderPlaylist() {
  const list = document.getElementById("playlist-list");
  list.innerHTML = "";
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.onclick = () => { currentIndex = index; loadSong(currentIndex); };
    if (index === currentIndex) li.classList.add("active");
    list.appendChild(li);
  });
}

function loadSong(index) {
  document.getElementById("title").textContent = songs[index].title;
  document.getElementById("audio").src = songs[index].file;
  document.getElementById("cover").src = songs[index].cover;
  document.getElementById("audio").play();
  renderPlaylist(); // ✅ 강조 업데이트
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
}

function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
}

loadSong(currentIndex);
renderPlaylist();
document.getElementById("audio").onended = nextSong;

const audio = document.getElementById("audio");
const cover = document.getElementById("cover");

audio.addEventListener("play", () => {
  cover.style.animationPlayState = "running";
});

audio.addEventListener("pause", () => {
  cover.style.animationPlayState = "paused";
});