
class PoI {
  constructor(lat,lng, x, y, w, h, title) {
    this.lat = lat;
    this.lng = lng;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.title = title;
    this.rollover = false; // Is the mouse over the ellipse?

  }

  over(px, py, size) {
    let d = dist(px, py, this.x, this.y);

    // if (d < this.w) {
    //   console.log('over');
    //   this.y = this.y-10;
    //   textFont(font);
    //   noStroke();
    //   textSize(12);
    //   fill(50);
    //   text(this.title,this.x+5,this.y+2);
    // } 

    textFont(font);
      noStroke();
      textSize(size);
      
      fill(255,255,51);
      stroke(0,0,0);
      strokeWeight(8);
      //text(this.title,this.x+5,this.y+2);
  }
  
  show() {
    stroke(255,102,178);
    
    //fill(color);
    //ellipse(this.x-10,this.y,10);
       
  }

  updatePos(_x, _y, _zoom) {
    //adjust if map is moved
    let zoomExpWidth = map(_zoom,0,22,0,6);
    let zoomExpHeight = map(_zoom,0,22,0,6);
    this.x = _x;
    this.y = _y;
    this.w = exp(zoomExpWidth);
    this.h = exp(zoomExpHeight);
  
  }
  
}