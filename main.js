function preload(){

}
function setup(){
canvas = createCanvas(600,600);
canvas.center()
video = createCapture(VIDEO);
video.size(300,300)
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPose);
}
function draw(){

}
function takePicture(){
save("coolfilterimage.png")
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