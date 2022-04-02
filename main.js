img = "";
status = "";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelloaded); 
    document.getElementById("status").innerHTML = "Status = Detective Objects!";
}

function preload(){
    img = loadImage("dog_cat.jpg"); 

}

function draw(){
image(img,0, 0 , 640 , 420);   
fill("red");
text("DOG", 45,75);
noFill();
stroke("#08fcbf");
rect(30,60,450,350);

fill("#1900ff");
text("CAT", 320,120);
noFill();
stroke("#9389f0");
rect(300, 90, 270, 320);

}

function modelloaded(){
    console.log("Model Loaded!"); 
    status = true; 
    objectDetector.Detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error); 

    }
    console.log(results);
}