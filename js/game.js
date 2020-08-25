class Game{
    constructor(){


    }

    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameState=data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state

        })
    }

    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");

            if(playerCountRef.exists()){

                playerCount=playerCountRef.val();
                player.getCount();
            }
            
            form=new Form();
            form.display();
        }

    }
    
    play(){
        bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
        bg.scale=3;
        bg.addImage(gg1);
        form.hide();
        Player.getPlayerInfo();
        Player.getCarsAtEnd();


        iground=createSprite(displayWidth/2,displayHeight-130,displayWidth,20);
            
            car1=createSprite(200,700);
            car1.addImage("car1",p1);
            car1.scale=0.2
            car2=createSprite(600,700);
            car2.scale=0.2
            car2.addImage("car2",p2);
            car3=createSprite(1000,700);
            car3.scale=0.2
            car3.addImage("car3",p1);
            car4=createSprite(1400,700);
            car4.addImage("car4",p2);
            car4.scale=0.2

            cars=[car1,car2,car3,car4];
        
        if(allPlayers!==undefined){
        
            //var display_position=130;

            //image(gg1,displayWidth/16,displayHeight/16,displayWidth,displayHeight);
            background("brown");

            

            var index=0;
            var x;
            var y=700;

            var z=10;


            for(var plr in allPlayers){

                index=index+1;

                y=y;

                z=z+50;

                x=(displayWidth/2)-allPlayers[plr].distance+z;
                
                
                
                cars[index-1].x=x;
                cars[index-1].y=y;

                


                //if(plr==="player"+player.index)
                //fill("red");
                //else
                //fill("black");

                //display_position+=30;
                //textSize(15);
                //text(allPlayers[plr].name+" : "+allPlayers[plr].distance,120,display_position) 
            }
        }
        if(keyDown("LEFT_ARROW")&&player.index!==null){

            player.distance+=50;
            player.update();
            
        }

        

        if(keyDown("RIGHT_ARROW")&&player.index!==null){
            player.distance-=50;
            player.update();

        }

        if(keyDown("RIGHT_ARROW")&&player.index===1){
            //car1.addImage("car1",p1);
            num1=0;

        }

        if(keyDown("LEFT_ARROW")&&player.index===1){
            //car1.addImage("car1",p2);
            num1=1;

        }

        if(num1===0){

            car1.addImage("car1",p1);
        }
        else if(num1===1){

            car1.addImage("car1",p2)

        }

        if(keyWentDown("SPACE")&&player.index===1&&num1===0){
             bullet=createSprite(car1.x,car1.y,20,20);
             bullet.velocityX=-5;
             console.log(bullet.velocityX)
        }

        //if(keyDown("space")&&player.index!=null){
          //  bullet1 = createSprite(player.distance,700,40,10)
           // bullet1.x= player.distance
            //bullet1.velocityX = -2;
        //}

        //if(player.distance>5000){
            //gameState=2;
            //Player.rank+=1;
            //Player.updateCarsAtEnd(Player.rank);
            // game.update(2);
        //}

        car1.collide(iground);
        car2.collide(iground);
        car3.collide(iground);
        car4.collide(iground);

        drawSprites();
        
    }

    end(){
        console.log("gameEnded");
        console.log(Player.rank);
        //game.update(2);
        drawSprites();
    }

  

}

