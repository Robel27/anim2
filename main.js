function startClassification() {
	navigator.mediaDevices.getUserMedia({ audio: true});
	classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2ff5rIj5T/model.json', modelReady);
}

function modelReady(){
	classifier.classify(gotResults);
}

function gotResults(error, results) {

}