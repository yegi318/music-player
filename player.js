const songs = [

{
title:"song1",
file:"music/song1.mp3",
cover:"images/cover1.jpg"
},

{
title:"song2",
file:"music/song2.mp3",
cover:"images/cover2.jpg"
}

]

let index = 0

const audio = document.getElementById("audio")
const title = document.getElementById("title")
const cover = document.getElementById("cover")

function loadSong(){

title.textContent = songs[index].title
audio.src = songs[index].file
cover.src = songs[index].cover

}

function nextSong(){

index++
if(index>=songs.length) index=0

loadSong()
audio.play()

}

function prevSong(){

index--
if(index<0) index=songs.length-1

loadSong()
audio.play()

}

loadSong()