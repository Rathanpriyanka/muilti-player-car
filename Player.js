class Player {
constructor() {
this.name=null;
this.distance=0;
this.index=null;

}
getcount () {
var psRef = database.ref("playerCount")
psRef.on("value",function (data){
playerCount = data.val();

});

}

updateCount (count) {
    database.ref("/").update({
        playerCount: count
      
      });


}

update () {
var playerIndex = "players/player"+ this.index;
database.ref(playerIndex).set({

name : this.name,
distance : this.distance

});



}

static getPlayerInfo(){

var playerInfoRef=database.ref("players")
playerInfoRef.on("values",(data)=>{

allPlayers=data.val();
console.log(allPlayers);

});

}

}