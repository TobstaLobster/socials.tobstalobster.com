const ending = document.querySelector('.ending')
var bg = document.querySelector(".bg");

// Get the button
var btn = document.querySelector(".btn");

// Pause and play the video, and change the button text
btn.addEventListener('click', (e)=>{
	console.log('hi')
	if (bg.paused) {
		bg.play();
        btn.innerHTML = "<span class=\"material-symbols-outlined\">pause</span>";
	} else {
    	bg.pause();
        btn.innerHTML = "<span class=\"material-symbols-outlined\">play_arrow</span>";
  }
})

const discord = document.querySelector('.discord')
discord.addEventListener("mouseenter", (e) => {document.querySelector(`.discord`).innerHTML = '« @TobstaLobster#0001 »';})
discord.addEventListener("mouseleave", (e) => {document.querySelector(`.discord`).innerHTML = `« Discord »`;});
const youtube = document.querySelector('.youtube')
youtube.addEventListener("mouseenter", (e) => {document.querySelector(`.youtube`).innerHTML = '« @TobstaLobster »';})
youtube.addEventListener("mouseleave", (e) => {document.querySelector(`.youtube`).innerHTML = `« YouTube »`;});
const twitch = document.querySelector('.twitch')
twitch.addEventListener("mouseenter", (e) => {document.querySelector(`.twitch`).innerHTML = '« @ThisTobstaLobster »';})
twitch.addEventListener("mouseleave", (e) => {document.querySelector(`.twitch`).innerHTML = `« Twitch »`;});
const twitter = document.querySelector('.twitter')
twitter.addEventListener("mouseenter", (e) => {document.querySelector(`.twitter`).innerHTML = '« @TobstaLobster »';})
twitter.addEventListener("mouseleave", (e) => {document.querySelector(`.twitter`).innerHTML = `« Twitter »`;});
const tiktok = document.querySelector('.tiktok')
tiktok.addEventListener("mouseenter", (e) => {document.querySelector(`.tiktok`).innerHTML = '« @TobstaLobster »';})
tiktok.addEventListener("mouseleave", (e) => {document.querySelector(`.tiktok`).innerHTML = `« TikTok »`;});