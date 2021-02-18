var cat1,cat2,cat3,mouse1,mouse2,mouse3,garden;
var cat1Image,cat2Image,cat3Image,mouse1Image,mouse2Image,mouse3Image,gardenImage;

function preload() {
    //load the images here
    gardenImage = loadImage(images/"garden.png");
    cat1Image = loadImage(images/"cat1.png");
    cat2Image = loadAnimation(images/"cat2.png","cat3.png");
    cat3Image = loadImage(images/"cat4.png");
    mouse1Image = loadImage(images/"mouse1.png");
    mouse2Image = loadAnimation(images/"mouse2.png","mouse3.png");
    mouse3Image = loadAnimation(images/"mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(400,400,20,20);
    garden.addImage("garden",gardenImage);

    //create tom and jerry sprites here

}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
