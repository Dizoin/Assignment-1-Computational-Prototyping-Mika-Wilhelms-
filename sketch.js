var b = []
var currentcolor;
var page;
var pageclear;
var colorbox = 50
var custombrush;
var slider;
let button;
var imagesave;


function preload() {
  //Loading my custom brush I found on the internet
  img = loadImage('splatter-png.png')
  
}
function setup() {
  createCanvas(800, 600);
  background(0);
  page = createGraphics(800, 540);
  
  //box color selection
  b[0] = color('#FF6B6B');
  b[1] = color('#FDD52E');
  b[2] = color('#4BECA8');
  b[3] = color('#724BFC');
  b[4] = color('#030003');
  
  currentcolor = b[0];
  //clear button
  button = createButton('Clear');
  button.size(colorbox,colorbox/2,10)
  button.position(690, height+20-colorbox);
  button.mousePressed(pageclear);
  //save button
  button = createButton('Save');
  button.size(colorbox,colorbox/2,10,10)
  button.position(690, height-6-colorbox);
  button.mousePressed(imagesave);
  //custom brush button
  button = createButton('');
  button.style('background-color','#FDF9F900');
  button.size(colorbox,colorbox,10,10)
  button.position(colorbox*9.8, height-5-colorbox);
  button.mousePressed(custombrush);
  
  slider = createSlider (0, 100, 10)
  slider.position(colorbox*6.7,height-colorbox+10);
  slider.style('width', '145px');
  }


  
function draw() {
  
  
  background(220)
  
  
  //slider line stroke variable
  let linestroke = slider.value();
  
  //custom brush
  
if(currentcolor == '#FDF9F900'){
  if (mouseIsPressed == true){ 
    page.push();
    page.translate(mouseX,mouseY);
    page.rotate(random(0,360));
    page.image(img,0,0,linestroke,linestroke);
    page.pop();
  }}
  
  //bottombar
  fill(0)
  rect(2.5, height-7.5 - colorbox, width-5,   colorbox+5,12.5);
  
  //page is my canvas
  image(page,0,0);
 
        
  //Drawing color boxes
  fill(b[0]);
  strokeWeight(0)
  rect(colorbox*0.1, height-5 - colorbox, colorbox, colorbox,10);
    
  fill(b[1]);
  strokeWeight(0)
  rect(colorbox*1.2, height-5 - colorbox, colorbox, colorbox,10);
    
  fill(b[2]);
  strokeWeight(0)
  rect(colorbox*2.3, height-5 - colorbox, colorbox,   colorbox,10);
    
  fill(b[3]);
  strokeWeight(0)
  rect(colorbox*3.4, height-5 - colorbox, colorbox,   colorbox,10);
  
  fill(b[4]);
  strokeWeight(1)
  stroke(225)
  rect(colorbox*4.5, height-5 - colorbox, colorbox, colorbox,10);
  
  fill(220)
  strokeWeight(0)
  rect(colorbox*5.6, height-5 - colorbox, colorbox, colorbox,10);
  
  fill(currentcolor)
  strokeWeight(1)
  stroke(225)
  rect(width-colorbox-5, height-5 - colorbox, colorbox, colorbox,10);
  
  fill(220)
  strokeWeight(0)
  rect(colorbox*6.7, height-5 - colorbox, colorbox*3, colorbox,10);
  
  fill(220)
  strokeWeight(0)
  rect(colorbox*9.8, height-5 - colorbox, colorbox, colorbox,10);
  
  image(img,colorbox*9.8, height-5-colorbox, colorbox, colorbox)
  
  textSize(10);
  strokeWeight(0)
  textStyle(BOLD)
  fill ('#1F0202')
  text('Eraser', 285, 590);
  
  textSize(10);
  strokeWeight(0)
  textStyle (ITALIC)
  fill ('#FFFFFF')
  text('Color', 750, 590);
  
  textSize(10);
  strokeWeight(0)
  textStyle(BOLD)
  fill ('#1F0202')
  text('Thickness:', 340, 590);
  
  textSize(10);
  strokeWeight(0)
  fill ('#1F0202')
  text(linestroke, 400, 590);
  
  
  
  //Line drawing function
  if(mouseIsPressed) {
    page.strokeWeight(linestroke)
    page.fill(currentcolor)
    page.stroke(currentcolor)
    page.line(mouseX, mouseY, pmouseX, pmouseY)
    
  //Adding a circle to allow for dots to be drawn
  }
  if(mouseIsPressed) {
    page.circle(mouseX, mouseY, linestroke/200)
  }
  
}
//custom brush png

function custombrush(){
        currentcolor = ('#FDF9F900');
    
  }

//drawing color selection
function mousePressed() {
  if (mouseY > height-colorbox-5) {
    if (mouseX < colorbox*6.6) {
      currentcolor = get(mouseX, mouseY);
    }
  }

}
//page clear button
function pageclear(){
  page.background (225)
}

function imagesave(){
  page.save ('Drawing_Save')
}
