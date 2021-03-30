class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.arr=[]
this.artt =loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
  var ari=[this.body.position.x,this.body.position.y]
  this.arr.push(ari)
  for(var art=0;art<this.arr.length;art++)

  {
    image (this.artt,this.arr[art][0],this.arr[art][1],10,10)  }

  }
}
