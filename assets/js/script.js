'use strict'

// MUSIC PLAYER

// const music = document.createElement('audio');
const music = new Audio('./assets/audio/artistes/1/albums/1/1.mp3');
const seek_slider = document.querySelector(".seek_slider");
const seek_slider_playlist = document.querySelector(".seek_slider_playlist");
const volume_slider = document.querySelector(".volume_slider");
const curr_time = document.querySelector(".current-time");
const curr_time_playlist = document.querySelector(".current-time-playlist");
const total_duration = document.querySelector(".total-duration");
const total_duration_playlist = document.querySelector(".total-duration-playlist");
const mute_music = document.querySelector(".mute-music");

const track_image = document.getElementsByClassName('track-image')[0];
const track_artist = document.getElementsByClassName('track-artist')[0];

var track_index = 0;
var isPlaying = false;
var updateTimer;

const play_btn = document.getElementsByClassName('play_btn')[0];
const play_btn2 = document.getElementsByClassName('play_btn2')[0];
const waves = document.querySelector('[data-waves]');
const waves2 = document.querySelector('[data-waves2]');
const wave = document.getElementsByClassName('wave')[0];
const item_list = document.getElementsByClassName('sidebar-left-playlist-song')[0];


const mobile_menu = document.querySelector('[data-mobile-menu]');
const overlay = document.querySelector('[data-overlay]');
const slide_song = document.querySelector('.slide-song');
const side_bar_right = document.getElementById('sidebar-bg');
const play_content = document.getElementById('play-content');
const play_song = document.getElementById('play-song');
const btn_click_open_menu_fixed = document.querySelector('[data-nav-toggler-fixed]');
const btn_click_close_menu = document.querySelector('[data-close-menu]');
const alert = document.querySelector('.alert');
const alert_notif = document.querySelector('.alert-notif');
const alert_notif_text = document.querySelector('.alert-notif-text');
const icon = document.querySelector('.alert-icon');


// import { autocomplete } from './autocomplete';

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
    <ion-icon onclick="clickIconPlay(this);" album_name="faded" image="1.jpg" title="faded" artiste_name="alan walker" id="0" class="playlist-play-btn" artiste="1" album="1" mp3="1.mp3" name="play-circle"></ion-icon>
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
    <ion-icon onclick="clickIconPlay(this);" album_name="faded" image="2.jpg" title="on my way" artiste_name="alan walker" id="1" class="playlist-play-btn" artiste="1" album="1" mp3="2.mp3" name="play-circle"></ion-icon>
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


  Array.from(document.getElementsByClassName('most-populars-item')).forEach((element, i) => {
    element.classList.remove('active-album');
  });

  e.target.classList.add('active-album')

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
      <ion-icon onclick="clickIconPlay(this);" album_name="faded" image="1.jpg" title="faded" artiste_name="alan walker" id="0" class="playlist-play-btn" artiste="${artiste}" album="${album}" mp3="1.mp3" name="play-circle"></ion-icon>
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
      <ion-icon onclick="clickIconPlay(this);" album_name="faded" image="2.jpg" title="on my way" artiste_name="alan walker" id="1" class="playlist-play-btn" artiste="${artiste}" album="${album}" mp3="2.mp3" name="play-circle"></ion-icon>
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
      <ion-icon onclick="clickIconPlay(this);" album_name="different world" image="1.jpg" title="different world" artiste_name="alan walker" id="0" class="playlist-play-btn" artiste="${artiste}" album="${album}" mp3="1.mp3" name="play-circle"></ion-icon>
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
      <ion-icon onclick="clickIconPlay(this);" album_name="different world" image="2.jpg" title="lost control" artiste_name="alan walker" id="1" class="playlist-play-btn" artiste="${artiste}" album="${album}" mp3="2.mp3" name="play-circle"></ion-icon>
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
      <ion-icon onclick="clickIconPlay(this);" album_name="different world" image="3.jpg" title="lilly" artiste_name="alan walker" id="2" class="playlist-play-btn" artiste="${artiste}" album="${album}" mp3="3.mp3" name="play-circle"></ion-icon>
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
     <ion-icon onclick="clickIconPlay(this);" album_name="different heaven" image="1.jpg" title="my heart" artiste_name="different heaven" id="0" class="playlist-play-btn" artiste="${artiste}" album="${album}" mp3="1.mp3" name="play-circle"></ion-icon>
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
     <ion-icon onclick="clickIconPlay(this);" album_name="different heaven" image="2.jpg" title="safe and sound" artiste_name="different world" id="1" class="playlist-play-btn" artiste="${artiste}" album="${album}" mp3="2.mp3" name="play-circle"></ion-icon>
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

const switchPlayPauseIcon = (value) => {
  play_btn.setAttribute('name', value);
  play_btn2.setAttribute('name', value);
}

play_btn.addEventListener('click', () => {

  if (music.paused || music.currentTime <= 0) {
    music.play();
    switchPlayPauseIcon('pause-circle-sharp');
    setEqualizer('active');
    sessionSet('isplaying',true)

  } else {
    music.pause();
    switchPlayPauseIcon('play-circle-sharp');
    setEqualizer('');
  }
});

play_btn2.addEventListener('click', () => {

  if (music.paused || music.currentTime <= 0) {
    music.play();
    switchPlayPauseIcon('pause-circle-sharp');
    setEqualizer('active');
    sessionSet('isplaying',true)

  } else {
    music.pause();
    switchPlayPauseIcon('play-circle-sharp');
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
    waves2.classList.add('active');
  }
  else{
    waves.classList.remove('active');
    waves2.classList.remove('active');
  }
}

//Play a music 
function clickIconPlay(e){
    setAllPlayBtn();
    const title = e.getAttribute('title');
    const artiste_name = e.getAttribute('artiste_name');
    const image = e.getAttribute('image');
    const index = e.getAttribute('mp3');
    const id = e.getAttribute('id');
    const artiste = e.getAttribute('artiste');
    const album = e.getAttribute('album');
    const album_name = e.getAttribute('album_name');
    let content = document.getElementById('track-artist');
    let content_menu = document.getElementById('content_menu');
    let header_text = document.querySelector('.header-text');

    music.src = `./assets/audio/artistes/${artiste}/albums/${album}/${index}`;


  // Update details of the track
  track_image.src = `./assets/img/artists/${artiste}/albums/${album}/${image}`;
  
  // track_artist.innerHTML = songs[track_index].song_name;
  content.innerHTML = `<div class="song-content-title" id="title_playlist">${title}</div>
  <div class="song-content-artist-name" id="name_playlist">${artiste_name}</div>`;

  content_menu.innerHTML = `<img class="track-image" src="./assets/img/artists/${artiste}/albums/${album}/${image}" alt="faded">
  <p class="song-content-artist-name">${artiste_name}</p>
  <p class="song-content-title">${title}</p>`;

  header_text.textContent = `${album_name}`;

  


    if (item_list.hasAttribute('id_item_playing')) {

      let id_item_playing = item_list.getAttribute('id_item_playing');

      if (id == id_item_playing) {
        

        if (play_btn.getAttribute('name') == 'pause' || play_btn2.getAttribute('name') == 'pause') {
          unactiveSong(item_list.getAttribute('id_item_playing'));//annuler les active
          music.currentTime = 0;
          e.setAttribute('name', 'play-circle-sharp');
          switchPlayPauseIcon('play-circle-sharp');
          setEqualizer('');
        }else
        {
          activeSongOnly(item_list.getAttribute('id_item_playing'));//annuler les active
          music.play();

          e.setAttribute('name', 'stop-circle-sharp');
          switchPlayPauseIcon('pause-circle-sharp');  
          setEqualizer('active');
          sessionSet('music',title)

        }
        

      } 
      else 
      {

        unactiveSong(item_list.getAttribute('id_item_playing'));//annuler les active
        music.currentTime = 0;

        activeSongOnly(id);
        e.setAttribute('name', 'stop-circle-sharp');
        music.play();
        sessionSet('music',title)

      }
    }
    else {

      activeSongOnly(id);

      if (play_btn.getAttribute('name') == 'play-circle-sharp' || play_btn2.getAttribute('name') == 'play-circle-sharp') {
        switchPlayPauseIcon('pause-circle-sharp');
        e.setAttribute('name', 'stop-circle-sharp');
        music.play();
        setEqualizer('active');
        sessionSet('music',title)


      } else {
        switchPlayPauseIcon('play-circle-sharp');
        music.currentTime = 0;
        e.setAttribute('name', 'play-circle-sharp');
        setEqualizer('');

      }
    }

    item_list.setAttribute('id_item_playing', id)

    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);
    // music.addEventListener("ended", stopMusic(e));


}

//active and unactive music song background while playing
function toogleActiveSong(id) {

  const numero_item = document.getElementsByClassName('song-number')[id];
  const div_item = document.getElementsByClassName('sidebar-left-playlist-song-item')[id];
  const icon_item = document.getElementsByClassName('playlist-play-btn')[id];

  if (play_btn.getAttribute('name') == 'play-circle-sharp' || play_btn2.getAttribute('name') == 'play-circle-sharp') {
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

//active music song background while playing
function activeSongOnly(id) {

  const numero_item = document.getElementsByClassName('song-number')[id];
  const div_item = document.getElementsByClassName('sidebar-left-playlist-song-item')[id];
  const icon_item = document.getElementsByClassName('playlist-play-btn')[id];

  numero_item.classList.add('play-on-numero');
  div_item.classList.add('play-on-item');
  icon_item.classList.add('play-on-icon');
  icon_item.setAttribute('name', 'stop-circle-sharp');

}

//unactive music song background while playing
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
  curr_time_playlist.textContent = "00:00";
  total_duration_playlist.textContent = "00:00";
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
  switchPlayPauseIcon('pause-circle-sharp');
  
  // Set an interval of 1000 milliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);
  // sessionSet('music',title)
}

function pauseTrack() {
  // Pause the loaded track
  music.pause();
  isPlaying = false;

  // Replace icon with the play icon
  switchPlayPauseIcon('play-circle-sharp');
}

function follow(e) {
  e.classList.add('active-follow');
  e.textContent = "SUIVI";
}

music.onended = function() {
  unactiveSong(item_list.getAttribute('id_item_playing'));//annuler les active
  switchPlayPauseIcon('play-circle-sharp');
  setEqualizer('');
};


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
  const album_name = data.getAttribute('album_name');
  let header_text = document.querySelector('.header-text');


  // Load a new track
  music.src = `./assets/audio/artistes/${artiste}/albums/${album}/${mp3}`;
  music.load();

  // Update details of the track
  track_image.src = `./assets/img/artists/${artiste}/albums/${album}/${image}`;
  
  // track_artist.innerHTML = songs[track_index].song_name;
  content.innerHTML = `<div class="song-content-title" id="title_playlist">${title}</div>
  <div class="song-content-artist-name" id="name_playlist">${artiste_name}</div>`;

  
  content_menu.innerHTML = `<img class="track-image" src="./assets/img/artists/${artiste}/albums/${album}/${image}" alt="faded">
  <p class="song-content-artist-name">${artiste_name}</p>
  <p class="song-content-title">${title}</p>`;

  header_text.textContent = `${album_name}`;


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

//update seek input
function seekUpdate() {
  let seekPosition = 0;

  // Check if the current track duration is a legible number
  if (!isNaN(music.duration)) {
    seekPosition = music.currentTime * (100 / music.duration);
    seek_slider.value = seekPosition;
    seek_slider_playlist.value = seekPosition;

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
    curr_time_playlist.textContent = currentMinutes + ":" + currentSeconds;
    total_duration_playlist.textContent = durationMinutes + ":" + durationSeconds;
  }
}

//opedn side left
function openSidebar() {
  document.querySelector('.sidebar-left').style.display = "block";
}


const openMenu = function () { 
      overlay.classList.add('active') ;
    mobile_menu.classList.add('active'); 
    side_bar_right.classList.add('hide-less'); 
}
btn_click_open_menu_fixed.addEventListener('click',openMenu);

const closeMenu = function () { 
  mobile_menu.classList.remove('active');    
  overlay.classList.remove('active'); 
  side_bar_right.classList.remove('hide-less'); 

}
btn_click_close_menu.addEventListener('click',closeMenu);



setInterval(() => {
  checkInternt();
}, 10000);


function addAlert(text){

  alert_notif_text.innerHTML = text
  alert_notif.classList.add('active');

  setTimeout(() => {
    alert_notif.classList.remove('active');
  }, 4000);
}


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
    play_song.classList.remove('hide-less');  
 }
  
icon.addEventListener('click', closeAlert);


 function sessionSet(key,value,text) {
  sessionStorage.setItem(key, value);
  if (text) {
    addAlert(text);
  }
}

function sessionGet(key) {
  return sessionStorage.getItem(key);
}

//autocomplete
 function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

 var artists_autocomplete = ["Alan walker","Arielle","Sia","The weekend","Michael Jackson"];
 autocomplete(document.getElementById("myInput"), artists_autocomplete);


//  Salutation
 if (sessionGet('salutation')==1) {}else{sessionSet("salutation",1,"Hé salut c\'est Sylvain <br> Mets tes écouteurs .");
 }


 function hideMenuPlaylist() {
  let menu_playlist= document.querySelector(".menu-playlist");
  menu_playlist.classList.remove('active');
 }


 function showMenuPlaylist() {
  let menu_playlist= document.querySelector(".menu-playlist");
  menu_playlist.classList.add('active');
 }