function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classiifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/THJRpUaVs/model.json', modelReady);
}

function modelReady()
{
    classiifier.classify(gotResults);
}