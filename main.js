  Webcam.set({
    width:350,
    height:300,
    image_format:'png',
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHtml = '<img id="captured_image" src="'+data_url+'"/>';
    });
}

 console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifer('https://teachablemachine.withgoogle.com/models/[...]',modelLoaded)

function modelLoaded(){
  console.log("Model Loaded!")
}

function check()
{
  img = document.getElementById('capured_image');
  classifier.classify(img, gotResult);
}

function gotResult(error, results) {
  if(error) {
    console.error(error)
  } else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHtml = results[0].confidence.toFixed(3);
  }
}