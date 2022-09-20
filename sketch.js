// bio

var string = "Under a pile of handwritten letters and my copy of l'Élégance du Hérisson, my quantum mechanics textbook resides, full of pressed flowers. Looking at one of these flowers, I admire the beauty in both its petals and its molecular makeup. I gaze back down at the page that previously cradled my flower; it also held derivations of the Schrödinger equation. I strip this equation of its math, and it reduces to an engagement with wonder. It follows that when a scientist measures an electron, she forces it out of a probability density and into existence. She creates it. So then, what separates her from an artist? Fundamentally, the artist and the scientist create and interpret what is yet to exist so that they may bring it into existence. They are explorers. It is the techniques, functions, and products of their respective, socially constructed fields that present their divergence. We cannot conflate the technician in the scientist or the technician in the artist with the creator in both the scientist and the artist. As the technical derives from the creative, I am passionate about finding the poetry in technical creation. Ultimately, my work seeks to unify the parallel visions and processes of the artist and the scientist through the creative use of emerging technology.";

var stepSize = 0;
var fontMin = 10;

var colorFluxR = 0;
var colorFluxG = 0;
var colorFluxB = 0;

var x = 0;
var y = 0;

var stringPosition = 0;
var angleDistortion = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  

  //INITIAL CONDITIONS
  background(0);
  noStroke();
  
  mouseX = width/2;
  mouseY = height/2;
  x = mouseX;
  y = mouseY;

}

function draw() {
  if (mousePosition) {
    textFont('Avenir');
    textSize(20)
	fill(255);
    
    //STRING STEP PRODUCTION
    var flux = dist(x,y, mouseX,mouseY);
    var nextPosition = string.charAt(stringPosition);
    nextPositionWidth = textWidth(nextPosition);

    //CONDITION TO PRINT NEXT LETTER
    if (flux > nextPositionWidth) {
      
      //VARIABLE TO ORIENT GEOMETRY TO MOUSE POSITION
      var angle = atan2(mouseY-y, mouseX-x);
      
      //READ AND PRINT STRING
      push();
      translate(x, y); 
      rotate(angle + random(angleDistortion));
      text(nextPosition, 0, 0);
      pop();
      
      stringPosition++;
      
      if (stringPosition > string.length-1){
        stringPosition = 0; 
      }

      x = x + cos(angle) * nextPositionWidth;
      y = y + sin(angle) * nextPositionWidth; 
      
      //FADE TEXT
      background(0, 0, 0, 5);
   
    }
  }
  else {
	stringPosition = 0;
	}
}

function mousePosition() {
  x = mouseX;
  y = mouseY;
}