class Player{

    constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
    this.rank=null;
    this.life=20;


    
    }

    getCount(){

        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
            playerCount=data.val();
        })
    }

    updateCount(count){

        database.ref('/').update({
            playerCount:count
        })
    }

    update(){

        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }

    static getPlayerInfo(){

        var getPlayerInfoRef=database.ref('players');
        getPlayerInfoRef.on("value",(data)=>{
            allPlayers=data.val();
        });
    }

    static getCarsAtEnd(){

        database.ref('carsAtEnd').on("value",(data)=>{
            this.rank=data.val();
        })
    }

    static updateCarsAtEnd(rank){

        database.ref('/').update({

            carsAtEnd:rank
        })
    }
}
