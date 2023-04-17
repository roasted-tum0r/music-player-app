const music= document.querySelector("audio")
const img=document.querySelector("img")
const play=document.getElementById("play")
const artist=document.getElementById("artist")
const title=document.getElementById("title")
const next=document.getElementById("next")
const prev=document.getElementById("prev")

const songs=[
    {
        name:"Wish You Were Here",
        title:"Wish You Were Here",
        artist:"Pink FLoyd"
    },
    {
        name:"Coming Back to Life",
        title:"Coming Back to Life",
        artist:"Pink FLoyd"
    },
    {
        name:"high hopes",
        title:"High Hopes",
        artist:"Pink FLoyd"
    },
    {
        name:"Here Comes The Rain Again",
        title:"Here Comes The Rain Again",
        artist:"Hypnogaja"
    }
]

let isPlaying =false

const playMusic= () =>{
    isPlaying=true
    music.play()
    play.classList.replace("fa-play","fa-pause")
    img.classList.add("anime")
}

const pauseMusic= () =>{
    isPlaying=true
    music.pause()
    play.classList.replace("fa-pause","fa-play")
    img.classList.add("anime")
}

play.addEventListener('click' , () =>{
    if(isPlaying)
    {
        pauseMusic()
    }else{
        playMusic()
    }
})

const loadSongs= (songs) =>{
    title.textContent=songs.title
    artist.textContent=songs.artist
    music.src= "music/" + songs.name + ".mp3"
    img.src="image/" + songs.name + ".jpg"
}

songIndex=0
const nextSong= () =>{
    songIndex=(songIndex+1)%songs.length
    loadSongs(songs[songIndex])
    playMusic()
}

const prevSong= () =>{
    songIndex=(songIndex-1+songs.length)% songs.length
    loadSongs(songs[songIndex])
    playMusic()
}
next.addEventListener('click', nextSong)
prev.addEventListener('click', prevSong)
