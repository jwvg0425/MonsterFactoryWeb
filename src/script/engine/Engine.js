$(function()
{
    Engine.init();
});

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
        for(var i =0; i < Engine.nodeList.length; i+=1)
        {
            Engine.nodeList[i].update(Engine.interval);
        }
    },
    
    render : function()
    {
        for(var i = 0; i < Engine.nodeList.length; i+=1)
        {
            Engine.nodeList[i].render(Engine.interval);
        }
    },
    
    nodeList : []
}