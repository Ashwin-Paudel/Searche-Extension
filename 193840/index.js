// var styleTag = document.createElement("style");
 // styleTag.textContent = 'html{-webkit-filter:invert(100%)!important}html,iframe{-webkit-filter:invert(100%)!important}audio,button,em,embed,figure:empty,form,img,object,svg,video{opacity:.8;-webkit-filter:invert(100%)!important}input,textarea{-webkit-filter:invert(25%)!important}nav{-webkit-filter:invert(15%)!important}header{-webkit-filter:invert(100%)!important}';
// document.documentElement.appendChild(styleTag);

import "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";

const J = jQuery.noConflict(true);

switch (document.location.url) {
    case "https://www.youlikehits.com/youtube2.php":
        console.log("Youtube Subscriber Bot Init")
        var buttons = J(".followbutton");
        buttons[0].click();
        setInterval(clickSubscribeButton, 3000);
        break;
}
switch (document.location.hostname) {
    case "youtube.com":
        clickSubscribeButton();
        break;
}
function clickYoutubeSubscriberButton() {
    try
    {
        var btnelem=document.getElementsByClassName('style-scope ytd-subscribe-button-renderer')[0];
        var subscribed = (btnelem.innerText.search("UNSUB") !== -1);
    } catch(Exception){window.close()}
    if(!subscribed){
        document.getElementsByClassName('style-scope ytd-subscribe-button-renderer')[0].click();
    }
    window.close();
}
function clickSubscribeButton() {
    var button = J(".likebutton");
    if (button.length) {
        button[0].click();
        console.log("Button Clicked");
    }
    //J(".followbutton")[0].click();
}

