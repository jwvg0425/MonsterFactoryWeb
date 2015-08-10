var Engine =
{
    interval : 100,
    init : function()
    {
        setInterval(Engine.gameloop, Engine.interval);
        Engine.render();
    },
    
    gameloop : function()
    {
        Engine.render();
        Engine.update();
    },
    
    update : function()
    {
        if(Engine.nowScene != null)
            Engine.nowScene.update(Engine.interval);
    },
    
    render : function()
    {
        if(Engine.nowScene != null)
            Engine.nowScene.render(Engine.interval);
    },
    
    runScene : function(scene)
    {
        Engine.nowScene = scene;
    },
    
    changeScene : function(scene)
    {
        Engine.nowScene = scene;
    },
    
    nowScene : null
}