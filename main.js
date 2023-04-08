function preload(){

}

video.hide();
poseNet = ml5.poseNet(video,modelLoaded);

function setup() {
    canvas = createCanvas(500, 500);
    video = createCapture(VIDEO);
    video.size(600, 600);
    video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
canvas.center();
  }
  
  function draw() {
    background(220);
    image(video, 0, 0, width, height);
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
console.log("Nose X is " + results[0].pose.nose.x - 14);
console.log("Nose Y is " + results[0].pose.nose.y + 14);
}
}