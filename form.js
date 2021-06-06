class Form{
    constructor(){
    }

    display(){
        var title=createElement("h2");
        title.html("car racing game");
        title.position(100,50);

        var input=createInput("name");
        input.position(100,100);

        var button=createButton("play");
        button.position(200,250);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name=input.value();
            playerCount+=1;
            //update playerCount in database 
            player.updateCount(playerCount);

            //update name
            player.update(name);

            var greeting=createElement("h3");
            greeting.html("hello "+name);
            greeting.position(150,200);
        })
    }
 
}