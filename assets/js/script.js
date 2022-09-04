'use strict'

// Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get(variable) {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // return the value
  return rs.getPropertyValue(variable);
}

// Create a function for setting a variable value
function myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--blue', 'lightblue');
}



// API GET ALL ARTISTES
const artistes = [
  {
    id: 1,
    artist_name: `<div class="most-populars-item active" id="1"  onclick="get_albums(this,1)">
    <img src="./assets/img/artists/1/1.jpg" width="100" height="100">
    <h3 class="most-populars-title">Alan walker</h3>
    </div>`,
    artist_image: './assets/img/1.jpg',
  },
  {
    id: 2,
    artist_name: `<div class="most-populars-item" id="2" onclick="get_albums(this,2);">
    <img src="./assets/img/artists/2/1.jpg" width="100" height="100">
    <h3 class="most-populars-title">different heaven</h3>
    </div>`,
    artist_image: './assets/img/2.jpg',
  },
  
];

var str ='';
const artistes_list= document.getElementById('artistes_list');
artistes.forEach(element => {
  str +=element.artist_name;
});
artistes_list.innerHTML = str; // API GET ALL ARTISTES


// API GET ALL ALBUMS
const albums = [
  {
    id: 1,
    album_name: `<div class="most-populars-item slide-song" onclick="get_songs(this,1,1);">
    <img src="./assets/img/artists/1/albums/1/1.jpg" width="120" height="120">
    <h3 class="most-populars-title">faded</h3>
    <h4 class="most-populars-title">alan walker</h4>
    <ion-icon name="play-circle-sharp"></ion-icon>
  </div>`,
    album_image: './assets/img/albums/1/1.jpg',
    artiste_id: 1
  },{
    id: 2,
    album_name: `<div class="most-populars-item slide-song" onclick="get_songs(this,1,2);">
    <img src="./assets/img/artists/1/albums/2/1.jpg" width="120" height="120">
    <h3 class="most-populars-title">different world</h3>
    <h4 class="most-populars-title">alan walker</h4>
    <ion-icon name="play-circle-sharp"></ion-icon>
  </div>`,
  album_image: './assets/img/albums/1/2.jpg',
  artiste_id: 1
  },
];

var str_albums ='';
const albums_list= document.getElementById('albums_list');
albums.forEach(element => {
  str_albums +=element.album_name;
});
albums_list.innerHTML = str_albums; // API GET ALL ALBUMS


// API GET ALL SONGS FROM ALBUMS
const songs = [
  {
    id: 1,
    song_name: `<div class="sidebar-left-playlist-song-item">
    <span class="song-number">01</span>
    <img src="./assets/img/artists/1/albums/1/1.jpg" width="40" height="40">
    <div class="song-content">
      <div class="song-content-title">faded</div>
      <div class="song-content-artist-name">alan walker</div>
    </div>
    <ion-icon image="1.jpg" title="faded" artiste_name="alan walker" id="0" class="playlist-play-btn" artiste="1" album="1" mp3="1.mp3" name="play-circle"></ion-icon>
    </div>`,
    song_image: './assets/img/artists/1/albums/1/1.jpg',
    album_id: 1
  }, 
  {
    id: 2,
    song_name: `<div class="sidebar-left-playlist-song-item">
    <span class="song-number">02</span>
    <img src="./assets/img/artists/1/albums/1/2.jpg" width="40" height="40">
    <div class="song-content">
      <div class="song-content-title">on my way</div>
      <div class="song-content-artist-name">alan walker</div>
    </div>
    <ion-icon image="2.jpg" title="on my way" artiste_name="alan walker" id="1" class="playlist-play-btn" artiste="1" album="1" mp3="2.mp3" name="play-circle"></ion-icon>
    </div>`,
    song_image: './assets/img/artists/1/albums/1/2.jpg',
    album_id: 1
  }
];

var str_album_songs ='';
const album_songs_list= document.getElementById('album_songs_list');
songs.forEach(element => {
  str_album_songs +=element.song_name;
});
album_songs_list.innerHTML = str_album_songs; // API GET ALL SONGS FROM ALBUMS



// API GET SONGS FROM ALBUM
function get_songs(e,artiste,album) {


  console.log(artiste);
  Array.from(document.getElementsByClassName('most-populars-item')).forEach((element, i) => {
    element.classList.remove('active-album');
  });

  e.classList.add('active-album')

  let  songs_album = [];

if (artiste==1 &&album==1) {
  
   songs_album = [
    {
      id: 1,
      song_name: `<div class="sidebar-left-playlist-song-item">
      <span class="song-number">01</span>
      <img src="./assets/img/artists/${artiste}/albums/${album}/1.jpg" width="40" height="40">
      <div class="song-content">
        <div class="song-content-title">faded</div>
        <div class="song-content-artist-name">alan walker</div>
      </div>
      <ion-icon onclick="clickIconPlay(this);" image="1.jpg" title="faded" artiste_name="alan walker" id="0" class="playlist-play-btn" artiste="${artiste}" album="${album}" mp3="1.mp3" name="play-circle"></ion-icon>
      </div>`,
      song_image: `./assets/audio/artists/${artiste}/albums/${album}/1.jpg`,
      album_id: 1
    }, 
    {
      id: 2,
      song_name: `<div class="sidebar-left-playlist-song-item">
      <span class="song-number">02</span>
      <img src="./assets/img/artists/${artiste}/albums/${album}/2.jpg" width="40" height="40">
      <div class="song-content">
        <div class="song-content-title">on my way</div>
        <div class="song-content-artist-name">alan walker</div>
      </div>
      <ion-icon onclick="clickIconPlay(this);" image="2.jpg" title="on my way" artiste_name="alan walker" id="1" class="playlist-play-btn" artiste="${artiste}" album="${album}" mp3="2.mp3" name="play-circle"></ion-icon>
      </div>`,
      song_image: `./assets/audio/artists/${artiste}/albums/${album}/2.jpg`,
      album_id: 1
    }
  ];
}

if (artiste==1 &&album==2) {
  
   songs_album = [
    {
      id: 1,
      song_name: `<div class="sidebar-left-playlist-song-item">
      <span class="song-number">01</span>
      <img src="./assets/img/artists/${artiste}/albums/${album}/1.jpg" width="40" height="40">
      <div class="song-content">
        <div class="song-content-title">different world</div>
        <div class="song-content-artist-name">alan walker</div>
      </div>
      <ion-icon onclick="clickIconPlay(this);" image="1.jpg" title="different world" artiste_name="alan walker" id="0" class="playlist-play-btn" artiste="${artiste}" album="${album}" mp3="1.mp3" name="play-circle"></ion-icon>
      </div>`,
      song_image: `./assets/audio/artists/${artiste}/albums/${album}/1.jpg`,
      album_id: 1
    }, 
    {
      id: 2,
      song_name: `<div class="sidebar-left-playlist-song-item">
      <span class="song-number">02</span>
      <img src="./assets/img/artists/${artiste}/albums/${album}/2.jpg" width="40" height="40">
      <div class="song-content">
        <div class="song-content-title">lost control</div>
        <div class="song-content-artist-name">alan walker</div>
      </div>
      <ion-icon onclick="clickIconPlay(this);" image="2.jpg" title="lost control" artiste_name="alan walker" id="1" class="playlist-play-btn" artiste="${artiste}" album="${album}" mp3="2.mp3" name="play-circle"></ion-icon>
      </div>`,
      song_image: `./assets/audio/artists/${artiste}/albums/${album}/2.jpg`,
      album_id: 1
    },{
      id: 3,
      song_name: `<div class="sidebar-left-playlist-song-item">
      <span class="song-number">02</span>
      <img src="./assets/img/artists/${artiste}/albums/${album}/3.jpg" width="40" height="40">
      <div class="song-content">
        <div class="song-content-title">lilly</div>
        <div class="song-content-artist-name">alan walker</div>
      </div>
      <ion-icon onclick="clickIconPlay(this);" image="3.jpg" title="lilly" artiste_name="alan walker" id="2" class="playlist-play-btn" artiste="${artiste}" album="${album}" mp3="3.mp3" name="play-circle"></ion-icon>
      </div>`,
      song_image: `./assets/audio/artists/${artiste}/albums/${album}/3.jpg`,
      album_id: 1
    }
  ];
}



if (artiste==2 &&album==1) {
  
  songs_album = [
   {
     id: 1,
     song_name: `<div class="sidebar-left-playlist-song-item">
     <span class="song-number">01</span>
     <img src="./assets/img/artists/${artiste}/albums/${album}/1.jpg" width="40" height="40">
     <div class="song-content">
       <div class="song-content-title">my heart</div>
       <div class="song-content-artist-name">different heaven</div>
     </div>
     <ion-icon onclick="clickIconPlay(this);" image="1.jpg" title="my heart" artiste_name="different heaven" id="0" class="playlist-play-btn" artiste="${artiste}" album="${album}" mp3="1.mp3" name="play-circle"></ion-icon>
     </div>`,
     song_image: `./assets/audio/artists/${artiste}/albums/${album}/1.jpg`,
     album_id: 1
   }, 
   {
     id: 2,
     song_name: `<div class="sidebar-left-playlist-song-item">
     <span class="song-number">02</span>
     <img src="./assets/img/artists/${artiste}/albums/${album}/2.jpg" width="40" height="40">
     <div class="song-content">
       <div class="song-content-title">safe and sound</div>
       <div class="song-content-artist-name">different heaven</div>
     </div>
     <ion-icon onclick="clickIconPlay(this);" image="2.jpg" title="safe and sound" artiste_name="different world" id="1" class="playlist-play-btn" artiste="${artiste}" album="${album}" mp3="2.mp3" name="play-circle"></ion-icon>
     </div>`,
     song_image: `./assets/audio/artists/${artiste}/albums/${album}/2.jpg`,
     album_id: 1
   }
 ];
}

var str_album_songs ='';
const album_songs_list= document.getElementById('album_songs_list');
songs_album.forEach(element => {
  str_album_songs +=element.song_name;
});
album_songs_list.innerHTML = str_album_songs; 


}

// API GET ALBUMS FROM ARTISTS
function get_albums(e,artiste) {

  console.log(artiste);
  Array.from(document.getElementsByClassName('most-populars-item')).forEach((element, i) => {
    element.classList.remove('active');
  });

  e.classList.add('active')
  var albums = [] ;
// API GET ALL ALBUMS

if (artiste==1) {
  
 albums = [
  {
    id: 1,
    album_name: `<div class="most-populars-item slide-song active-album" onclick="get_songs(1,1);">
    <img src="./assets/img/artists/1/albums/1/1.jpg" width="120" height="120">
    <h3 class="most-populars-title">faded</h3>
    <h4 class="most-populars-title">alan walker</h4>
    <ion-icon name="play-circle-sharp"></ion-icon>
  </div>`,
    album_image: './assets/img/artists/1/albums/1/1.jpg',
    artiste_id: 1
  },{
    id: 2,
    album_name: `<div class="most-populars-item slide-song active-album" onclick="get_songs(this,1,2);">
    <img src="./assets/img/artists/1/albums/2/1.jpg" width="120" height="120">
    <h3 class="most-populars-title">different world</h3>
    <h4 class="most-populars-title">alan walker</h4>
    <ion-icon name="play-circle-sharp"></ion-icon>
  </div>`,
  album_image: './assets/img/artists/1/albums/1/2.jpg',
  artiste_id: 1
  },
];

}


if (artiste==2) {
  
  albums = [
   {
     id: 1,
     album_name: `<div class="most-populars-item slide-song active-album" onclick="get_songs(this,2,1);">
     <img src="./assets/img/artists/2/albums/1/1.jpg" width="120" height="120">
     <h3 class="most-populars-title">diferent heaven</h3>
     <h4 class="most-populars-title">diferent heaven</h4>
     <ion-icon name="play-circle-sharp"></ion-icon>
   </div>`,
     album_image: './assets/img/artists/2/albums/1/1.jpg',
     artiste_id: 2
   }
 ];
 
 }

var str_albums ='';
const albums_list= document.getElementById('albums_list');
albums.forEach(element => {
  str_albums +=element.album_name;
});
albums_list.innerHTML = str_albums; // API GET ALL ALBUMS
}

const music = new Audio('./assets/audio/artistes/1/albums/1/1.mp3');
// const music = document.createElement('audio');

// MUSIC PLAYER
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let mute_music = document.querySelector(".mute-music");

let track_image = document.getElementsByClassName('track-image')[0];
const track_artist = document.getElementsByClassName('track-artist')[0];


// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;


// Array.from(document.getElementsByClassName('sidebar-left-playlist-song-item')).forEach((element, i) => {
//   element.getElementsByTagName('img')[0].src = songs[i].song_image;
//   element.getElementsByClassName('song-content')[0].innerHTML = songs[i].song_name;
// });

const play_btn = document.querySelector('[data-play-btn]');
const waves = document.querySelector('[data-waves]');
const wave = document.getElementsByClassName('wave')[0];
const item_list = document.getElementsByClassName('sidebar-left-playlist-song')[0];

const switchPlayPauseIcon = (value) => {
  play_btn.setAttribute('name', value);
}

play_btn.addEventListener('click', () => {

  if (music.paused || music.currentTime <= 0) {
    music.play();
    switchPlayPauseIcon('pause');
    setEqualizer('active');
  } else {
    music.pause();
    switchPlayPauseIcon('play');
    setEqualizer('');
  }
});

const setAllPlayBtn = () => {
  Array.from(document.getElementsByClassName('playlist-play-btn')).forEach((element, i) => {
    element.setAttribute('name', 'play-circle-sharp');
  });
}

const setEqualizer = (value) => {
  if (value=='active') {
    waves.classList.add('active');
  }
  else{
    waves.classList.remove('active');
  }
}

function clickIconPlay(e){
 

    setAllPlayBtn();
    const title = e.getAttribute('title');
    const artiste_name = e.getAttribute('artiste_name');
    const image = e.getAttribute('image');
    const index = e.getAttribute('mp3');
    const id = e.getAttribute('id');
    const artiste = e.getAttribute('artiste');
    const album = e.getAttribute('album');
    let content = document.getElementById('track-artist');

    console.log(title);

    music.src = `./assets/audio/artistes/${artiste}/albums/${album}/${index}`;


  // Update details of the track
  track_image.src = `./assets/img/artists/${artiste}/albums/${album}/${image}`;
  
  // track_artist.innerHTML = songs[track_index].song_name;
  content.innerHTML = `<div class="song-content-title" id="title_playlist">${title}</div>
  <div class="song-content-artist-name" id="name_playlist">${artiste_name}</div>`;


    
    if (item_list.hasAttribute('id_item_playing')) {
      console.log('item_id exitse');

      let id_item_playing = item_list.getAttribute('id_item_playing');

      if (id == id_item_playing) {
        

        if (play_btn.getAttribute('name') == 'pause') {
          unactiveSong(item_list.getAttribute('id_item_playing'));//annuler les active
          music.currentTime <= 0;
          e.setAttribute('name', 'play-circle-sharp');
          switchPlayPauseIcon('play');
          setEqualizer('');
        }else
        {
          activeSongOnly(item_list.getAttribute('id_item_playing'));//annuler les active
          music.play();
          e.setAttribute('name', 'stop-circle-sharp');
          switchPlayPauseIcon('pause');  
          setEqualizer('active');
        }
        

      } 
      else 
      {

        unactiveSong(item_list.getAttribute('id_item_playing'));//annuler les active
        music.currentTime = 0;

        activeSongOnly(id);
        e.setAttribute('name', 'stop-circle-sharp');
        music.play();

      }
    }
    else {

      toogleActiveSong(id);


      if (play_btn.getAttribute('name') == 'play') {
        switchPlayPauseIcon('pause');
        e.setAttribute('name', 'stop-circle-sharp');
        music.play();
        setEqualizer('active');


      } else {
        switchPlayPauseIcon('play');
        music.currentTime = 0;
        e.setAttribute('name', 'play-circle-sharp');
        setEqualizer('');

      }
    }

    item_list.setAttribute('id_item_playing', id)

    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
    music.addEventListener("ended", stopMusic(e));


}

//Jouer un Titre de l'album
Array.from(document.getElementsByClassName('playlist-play-btn')).forEach((element, i) => {

  element.addEventListener('click', (e) => {

  
    setAllPlayBtn();
    const title = e.target.getAttribute('title');
    const artiste_name = e.target.getAttribute('artiste_name');
    const image = e.target.getAttribute('image');
    const index = e.target.getAttribute('mp3');
    const id = e.target.getAttribute('id');
    const artiste = e.target.getAttribute('artiste');
    const album = e.target.getAttribute('album');
    let content = document.getElementById('track-artist');

    console.log(title);

    music.src = `./assets/audio/artistes/${artiste}/albums/${album}/${index}`;


  // Update details of the track
  track_image.src = `./assets/img/artists/${artiste}/albums/${album}/${image}`;
  
  // track_artist.innerHTML = songs[track_index].song_name;
  content.innerHTML = `<div class="song-content-title" id="title_playlist">${title}</div>
  <div class="song-content-artist-name" id="name_playlist">${artiste_name}</div>`;



    
    if (item_list.hasAttribute('id_item_playing')) {
      console.log('item_id exitse');

      let id_item_playing = item_list.getAttribute('id_item_playing');

      if (id == id_item_playing) {
        
        console.log(play_btn.getAttribute('name'));

        if (play_btn.getAttribute('name') == 'pause') {
          unactiveSong(item_list.getAttribute('id_item_playing'));//annuler les active
          music.currentTime <= 0
          e.target.setAttribute('name', 'play-circle-sharp');
          switchPlayPauseIcon('play');
          setEqualizer('');
        }else
        {
          activeSongOnly(item_list.getAttribute('id_item_playing'));//annuler les active
          music.play();
          e.target.setAttribute('name', 'stop-circle-sharp');
          switchPlayPauseIcon('pause');  
          setEqualizer('active');
        }
        

      } 
      else 
      {

        unactiveSong(item_list.getAttribute('id_item_playing'));//annuler les active
        music.currentTime = 0;

        activeSongOnly(id);
        e.target.setAttribute('name', 'stop-circle-sharp');
        music.play();

      }
    }
    else {
      console.log('item_id exitse pas');

      toogleActiveSong(id);


      if (play_btn.getAttribute('name') == 'play') {
        switchPlayPauseIcon('pause');
        e.target.setAttribute('name', 'stop-circle-sharp');
        music.play();
        setEqualizer('active');


      } else {
        switchPlayPauseIcon('play');
        music.currentTime = 0;
        e.target.setAttribute('name', 'play-circle-sharp');
        setEqualizer('');

      }
    }

    item_list.setAttribute('id_item_playing', id)

    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);

  })
});

function playSong() {

}



function toogleActiveSong(id) {

  const numero_item = document.getElementsByClassName('song-number')[id];
  const div_item = document.getElementsByClassName('sidebar-left-playlist-song-item')[id];
  const icon_item = document.getElementsByClassName('playlist-play-btn')[id];

  if (play_btn.getAttribute('name') == 'play') {
    numero_item.classList.add('play-on-numero');
    div_item.classList.add('play-on-item');
    icon_item.classList.add('play-on-icon');
    icon_item.setAttribute('name', 'stop-circle-sharp');

  } else {
    numero_item.classList.remove('play-on-numero');
    div_item.classList.remove('play-on-item');
    icon_item.classList.remove('play-on-icon');
    icon_item.setAttribute('name', 'stop-circle-sharp');

  }
}


function activeSongOnly(id) {

  const numero_item = document.getElementsByClassName('song-number')[id];
  const div_item = document.getElementsByClassName('sidebar-left-playlist-song-item')[id];
  const icon_item = document.getElementsByClassName('playlist-play-btn')[id];

  numero_item.classList.add('play-on-numero');
  div_item.classList.add('play-on-item');
  icon_item.classList.add('play-on-icon');
  icon_item.setAttribute('name', 'stop-circle-sharp');

}


function unactiveSong(id) {

  const numero_item = document.getElementsByClassName('song-number')[id];
  const div_item = document.getElementsByClassName('sidebar-left-playlist-song-item')[id];
  const icon_item = document.getElementsByClassName('playlist-play-btn')[id];

  numero_item.classList.remove('play-on-numero');
  div_item.classList.remove('play-on-item');
  icon_item.classList.remove('play-on-icon');
  icon_item.setAttribute('name', 'play-circle-sharp');
}




// Function to reset all values to their default
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function playpauseTrack() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  // Play the loaded track
  music.play();
  isPlaying = true;
  setEqualizer('active');

  // Replace icon with the pause icon
  switchPlayPauseIcon('pause');

  // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
}

function pauseTrack() {
  // Pause the loaded track
  music.pause();
  isPlaying = false;

  // Replace icon with the play icon
  switchPlayPauseIcon('play');
}

function follow(e) {
  e.classList.add('active-follow');
  e.textContent = "SUIVI";
}

function stopMusic(e) {
  unactiveSong(item_list.getAttribute('id_item_playing'));//annuler les active
  // e.setAttribute('name', 'play-circle-sharp');
  switchPlayPauseIcon('play');
  setEqualizer('');
}


function nextTrack() {

  // Go back to the first track if the
  // current one is the last in the track list
  if (track_index < document.getElementsByClassName('playlist-play-btn').length - 1)
    track_index += 1;
  else track_index = 0;

  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0)
    track_index -= 1;
  else track_index = songs.length - 1;

  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}


function loadTrack(track_index) {
  // Clear the previous seek timer
  // clearInterval(updateTimer);
  resetValues();

  
  const data = document.getElementsByClassName('playlist-play-btn')[track_index];
  
  let content = document.getElementById('track-artist');
  let artiste = data.getAttribute('artiste');
  let album =  data.getAttribute('album');
  let mp3 = data.getAttribute('mp3');
  let image = data.getAttribute('image');
  let title = data.getAttribute('title');
  let artiste_name = data.getAttribute('artiste_name');

  // Load a new track
  music.src = `./assets/audio/artistes/${artiste}/albums/${album}/${mp3}`;
  music.load();

  // Update details of the track
  track_image.src = `./assets/img/artists/${artiste}/albums/${album}/${image}`;
  
  // track_artist.innerHTML = songs[track_index].song_name;
  content.innerHTML = `<div class="song-content-title" id="title_playlist">${title}</div>
  <div class="song-content-artist-name" id="name_playlist">${artiste_name}</div>`;

  // Move to the next track if the current finishes playing
  // using the 'ended' event
  music.addEventListener("ended", nextTrack);

  // Apply a random background color
  // random_bg_color();

  if (item_list.hasAttribute('id_item_playing')) {
    let id_item_playing = item_list.getAttribute('id_item_playing');
    unactiveSong(id_item_playing);
    activeSongOnly(track_index);
    item_list.setAttribute('id_item_playing', track_index);
  }else
  {
    activeSongOnly(track_index);
    item_list.setAttribute('id_item_playing', track_index);
  }

}

function seekTo() {
  // Calculate the seek position by the
  // percentage of the seek slider
  // and get the relative duration to the track
  let seekto = music.duration * (seek_slider.value / 100);

  // Set the current track position to the calculated seek position
  music.currentTime = seekto;
}

function setVolume() {
  // Set the volume according to the
  // percentage of the volume slider set
  music.volume = volume_slider.value / 100;
}

function toggleVolume() {
  let volume_icon = mute_music.getAttribute('name');
  if (volume_icon == 'volume-high-outline') {
    mute_music.setAttribute('name', 'volume-low-outline');
    music.volume = 0;
  } else {
    mute_music.setAttribute('name', 'volume-high-outline');
    music.volume = 99 / 100;
  }
}

function seekUpdate() {
  let seekPosition = 0;

  // Check if the current track duration is a legible number
  if (!isNaN(music.duration)) {
    seekPosition = music.currentTime * (100 / music.duration);
    seek_slider.value = seekPosition;

    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(music.currentTime / 60);
    let currentSeconds = Math.floor(music.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(music.duration / 60);
    let durationSeconds = Math.floor(music.duration - durationMinutes * 60);

    // Add a zero to the single digit time values
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    // Display the updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

// const imageBg = document.getElementById('sidebar-bg');

// setInterval(25000,imageBg.style.backgroundImage = "url('./assets/img/artists/1/1.jpg')");

function openSidebar() {
  document.querySelector('.sidebar-left').style.display = "block";
}


const mobile_menu = document.querySelector('[data-mobile-menu]');
const overlay = document.querySelector('[data-overlay]');
const slide_song = document.querySelector('.slide-song');
const side_bar_right = document.getElementById('sidebar-bg');
const play_content = document.getElementById('play-content');
const play_song = document.getElementById('play-song');


const btn_click_open_menu_fixed = document.querySelector('[data-nav-toggler-fixed]');
const openMenu = function () { 
      overlay.classList.add('active') ;
    mobile_menu.classList.add('active'); 
    side_bar_right.classList.add('hide-less'); 
}
btn_click_open_menu_fixed.addEventListener('click',openMenu);

const btn_click_close_menu = document.querySelector('[data-close-menu]');
const closeMenu = function () { 
  mobile_menu.classList.remove('active');    
  overlay.classList.remove('active'); 
  side_bar_right.classList.remove('hide-less'); 

}
btn_click_close_menu.addEventListener('click',closeMenu);


const alert = document.querySelector('.alert');
const icon = document.querySelector('.alert-icon');


setInterval(() => {
  checkInternt();
}, 10000);

function checkInternt() {
  
    if(navigator.onLine){
      alert.classList.remove('active');
      play_content.classList.remove('hide-less'); 
      play_song.classList.remove('hide-less');
    } else {
      alert.classList.add('active');
      play_content.classList.add('hide-less'); 
      play_song.classList.add('hide-less'); 
    }
    
  }
  
const closeAlert = function () { 
    alert.classList.remove('active');
    play_content.classList.remove('hide-less'); 
    play_song.classList.remove('hide-less');   }
 icon.addEventListener('click', closeAlert);