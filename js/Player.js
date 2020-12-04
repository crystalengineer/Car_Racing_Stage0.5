class Player {
    constructor(){

    }

    update(name){
        var playerIndex = "player"+ playerCount;
        database.ref(playerIndex).set({
            name:name
        });
    }

    updateCount(count){
        database.ref('/').update({
            playercount:count
        });
    }

    getCount(){
       var playerCountRef = database.ref('playercount');
       playerCountRef.on("value", function(data){
           playerCount = data.val();
       })
    }
}