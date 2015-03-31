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
        $GM.frame += 1;
        console.log($GM.frame);
        
        $GM.updateList.forEach(function(element)
        {
            element.data("update")(element, $GM.frame);
        });
        
        //매초마다 갱신해야 하는 것들
        if($GM.frame % 10 == 0)
        {
            $GM.updateBySecond();
        }
    }
};