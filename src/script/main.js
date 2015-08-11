$(function()
{
    Engine.init();
    
    var scene = new MainScene();
    scene.init();
    
    Engine.runScene(scene);
});