class Form {
constructor() {
this.input=createInput("name");
this.button=createButton("play");
this.greeting=createElement("h2");
}

hide () {

this.button.hide();
this.input.hide();
this.greeting.hide();

}

display () {
var title = createElement ("h2");
title.html("Car Racing Game");
title.position(330,100);


this.input.position(350,200);

this.button.position(500,250);

this.button.mousePressed(()=>{

    this.button.hide();
    this.input.hide();
    

var name = this.input.value();
playerCount++;
player.name=name;
player.index=playerCount;
player.update();
player.updateCount(playerCount);
this.greeting.html("hello" + name);
this.greeting.position(130,100);

})


}

}