bnosex = 0;
bnosey = 0;


function preload(){
mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}


function setup() {
    canvas = createCanvas(500, 500);
    video = createCapture(VIDEO);
    video.size(600, 600);
    video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPose);
canvas.center();
  }
  
  function draw() {

    image(video, 0, 0, width, height);
    image(mustache,bnosex,bnosey,65,65);
  }
function takePicture(){
    save("coolfilterimage.png");
  }
  
function modelLoaded(){
console.log("Posenet has initialized")
}
function gotPose(results){
if(results.length > 0){
console.log(results);
bnosex = results[0].pose.nose.x - 70;
bnosey = results[0].pose.nose.y - 60;
console.log("Nose X is " + bnosex);
console.log("Nose Y is " + bnosey);
}
}