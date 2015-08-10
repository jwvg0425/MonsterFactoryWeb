$(function()
{
    Engine.init();
    
    var scene = new Scene();
    
    scene.init("main");
    
    var sprite = new Sprite();
    
    sprite.init("image/colony.png");
    
    scene.addChild(sprite);
    
    Engine.runScene(scene);
});