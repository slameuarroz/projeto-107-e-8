function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZOyN5JViU/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.log(error);
    }else{
        console.log(results);
        var alien = results[0].label;
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML='posso ouvir-' + results[0].label;
        document.getElementById("result_confidence").innerHTML='precisão-' + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")";
        var alien1 = document.getElementById("alien1");
        var alien2 = document.getElementById("alien2");
        var alien3 = document.getElementById("alien3");
        var alien4 = document.getElementById("alien4");
        if (alien == "palmas"){
            alien1.src="aliens-01.gif";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.png";
        }else if(alien == "sino"){
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.gif";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.png";
        }else if(alien == "estalo"){
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.gif";
            alien4.src="aliens-04.png";
        }else{
            alien1.src="aliens-01.png";
            alien2.src="aliens-02.png";
            alien3.src="aliens-03.png";
            alien4.src="aliens-04.gif";
        }
    }
}
