Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:90,
    constraints:{facingMode:"enviornment"}
});

var camera=document.getElementById("camera");
Webcam.attach("#camera");


function take_snapshot( ){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot_preview").innerHTML="<img id='captured_image' src='"+data_uri+"'/>";
        //middle,variable, other two are in single commas
    });
}

console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded() {
    console.log("The model is loaded! YAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHOOOOOOOOOOOOOOOOOOOOOOOOOOO");
}

function check() {
    var capturedimage=document.getElementById("captured_image");
    classifier.classify(capturedimage,gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
    } 
    else {
        console.log(results);
        document.getElementById("output").innerHTML=results[0].label;
    }
}