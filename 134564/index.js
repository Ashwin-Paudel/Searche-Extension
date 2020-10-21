// Javascript File

var username ;
var password ;

function setCredentials(username, password) {
  //sets username and password 
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

}

function getCredentials() {
  //sets username and passwrod to username and password
  //return true if found, else false

  username = localStorage.getItem("username");
  password = localStorage.getItem("password");

  if(username && password){
    return true;
  }
  else{
    return false;
  }
}

$(document).ready(function(){
  console.log("Hello World");

  var hasCredentials = getCredentials();

  if(hasCredentials && $(".error").length === 0){
    console.log("Has credentials");
    $("input#username").val(username);
    $("input#password").val(password);
    $("input.button").click();

  }else{

    $("#loginForm").submit(function(e){
      username = $("input#username").val();
      password = $("input#password").val();
      setCredentials(username, password);
      console.log("Setting new username and password");
    });
    console.log("No credentials saved!");
  }
  
});
