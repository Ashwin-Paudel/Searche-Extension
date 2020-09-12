function enableDark () {
var styleTag = document.createElement("style");
styleTag.textContent = '@media (prefers-color-scheme:dark){html{-webkit-filter:invert(100%)!important}html,iframe{-webkit-filter:invert(100%)!important}audio,button,em,embed,figure:empty,form,img,object,svg,video{opacity:.8;-webkit-filter:invert(100%)!important}input,textarea{-webkit-filter:invert(25%)!important}nav{-webkit-filter:invert(15%)!important}header{-webkit-filter:invert(100%)!important}}';
document.documentElement.appendChild(styleTag);
}
function enableLight () {
var styleTag = document.createElement("style");
styleTag.textContent = '';
document.documentElement.appendChild(styleTag);
}
