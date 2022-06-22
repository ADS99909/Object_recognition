Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot() {
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<image id="snapshot" src="'+data_uri+'">';
});
}

console.log('ml5 version',ml5.version);

machine_learning=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_MVN4ElJG/model.json',modelloaded);
function modelloaded(){
    console.log('model is loaded');
}

function Check(){
    var img=document.getElementById("snapshot");
    machine_learning.classify(img, gotresult);
}

function gotresult(error, results) {
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("object_Name").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}