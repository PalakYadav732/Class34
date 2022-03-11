var rball,database;

function setup(){
    database = firebase.database();
    createCanvas(500,500);

    rball = createSprite(250,250,10,10);
    rball.shapeColor = "red";

    var rballPosition = database.ref('ball/position');
    rballPosition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

    function changePosition(x,y){
    database.ref("ball/position").set({
    'x':position.x+x,
    'y':position.y+y
    })
    }


function readPosition(data){
position=data.val();
rball.x = position.x;
rball.y=position.y;


}

function showError (){

  console.log ("error in fetching the data")
}