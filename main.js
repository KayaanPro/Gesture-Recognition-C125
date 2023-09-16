noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    canvas = createCanvas(600,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Noooooooo! PoseNet the nucleur bomb has started! We only have 1 donut left!");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(" noseX = " + noseX + " noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
        console.log(" leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}

function draw(){
    background(248, 253, 254)
    fill(57, 105, 146);
    stroke(144, 172, 196);
    square(noseX, noseY, difference);
    document.getElementById("square_size").innerHTML = "The size of the square is = " + difference + "px";
}