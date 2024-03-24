function take_snapshot(){
    save('Moustache.png')
}

function preload() {

}

function draw() {
    Image(video, 0, 0, 300, 300);
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
    poseNet.on('pose', gotPoses);
}