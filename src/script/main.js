$(function()
{
    Engine.init();
    
    var scene = new MainScene();
    
    Engine.runScene(scene);
    scene.init();
});