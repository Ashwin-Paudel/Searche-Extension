var styleTag = document.createElement("style");
styleTag.textContent = 'html{-webkit-filter:invert(100%)!important}html,iframe{-webkit-filter:invert(100%)!important}audio,button,em,embed,figure:empty,form,img,object,svg,video{opacity:.8;-webkit-filter:invert(100%)!important}nav{-webkit-filter:invert(95%)!important}';
document.documentElement.appendChild(styleTag);
