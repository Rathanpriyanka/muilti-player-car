class Game {
constructor() {

}

getState () {
var gsRef=database.ref("gamestate");
gsRef.on("value",function (data){
    gamestate=data.val();
})

}

update (state){

database.ref("/").update({
  gamestate: state

});

}

start () {

if (gamestate==0) {
player = new Player();
form = new Form();
form.display();
player.getcount();

}

}

play(){
form.hide();
text("GAME START",120,100);
Player.getPlayerInfo();
if(allPlayers!==undefined){
  var displayPosition = 130;
  for(var plr in allPlayers) {
   if(plr === "player" + player.index) {
    stroke("red");

   }
   else{
     stroke ("black");
   }
   displayPosition+=20;
   text(allPlayers[plr].name+": " + allPlayers[plr].distance,120,displayPosition);
  }
  


}

if(keyIsDown("up") && player.index!== null) {
 player.distance+=50;
 player.update ();

}

}


}