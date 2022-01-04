x = 0;
y = 0;
var i = 1;
draw_apple = "";
screen_width = "";
screen_height = "";



function preload()
{
    loadImage("apple.png")
}


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
 to_number = Number(content);
 if(Number.isInteger(to_number))
 {
     status = "Started Drawing Apple"
 }
 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width, screen_height-15)
 canvas.position(69, 96)
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
  for(i=0;i<=to_number;i++){
   Math.floor()
   x = Math.random()*700
   Math.floor()
   y = Math.random()*400
   image("apple.png", x, y, 40, 75);
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "to_number";
}
