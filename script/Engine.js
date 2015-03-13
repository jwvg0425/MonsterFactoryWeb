$(function()
{
    $GM.init();
    Engine.init();
});

var Engine =
{
    init : function()
    {
        setInterval(Engine.update, 100);
    },
    
    update : function()
    {
    }
};