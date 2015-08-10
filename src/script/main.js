$(function()
{
    Engine.init();
    
    var scene = new Scene();
    
    scene.init("main");
    
    var animation = new Animation();
    
    animation.init([
        {
            length : 1,
            src : "image/slime01.png"
        },
        {
            length : 1,
            src : "image/slime02.png"
        },
        {
            length : 1,
            src : "image/slime01.png"
        },
        {
            length : 1,
            src : "image/slime03.png"
        }]);
    
    scene.addChild(animation);
    
    Engine.runScene(scene);
});