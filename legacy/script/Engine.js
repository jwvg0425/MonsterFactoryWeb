$(function()
{
    $GM.init();
    Engine.init();
});

Array.prototype.remove = function (index) 
{
    this.splice(index, 1);
}


var Engine =
{
    init : function()
    {
        setInterval(Engine.update, 100);
        Engine.draw();
    },
    
    update : function()
    {
        $GM.frame += 1;
        
        for(var i = $GM.updateList.length - 1; i >=0 ; i--)
        {
            if($GM.updateList[i].parent().length == 0)
            {
                $GM.updateList.remove(i);
            }
        }
        
        $GM.updateList.forEach(function(element)
        {
            element.data("update")(element, $GM.frame);
        });
        
        //매초마다 갱신해야 하는 것들
        if($GM.frame % 10 == 0)
        {
            $GM.updateBySecond();
        }
    },
    
    draw : function()
    {
        var canvas = $("#buildings")[0];
        var context = canvas.getContext("2d");
        
        context.clearRect(0,0,720,160);
        
        var background = new Image();
        
        background.onload = function()
        {
            context.drawImage(background, 0, 0);
            
            if($GM.colony > 0)
            {
                var colonyImage = new Image();
            
                colonyImage.onload = function()
                {
                    for(var i = 0; i < $GM.colony; i++)
                    {
                        context.drawImage(colonyImage, 20 + i*20, 95);
                    }
                }
            
                colonyImage.src = "image/colony.png";
            }
            
            if($GM.mine > 0)
            {
                var mineImage = new Image();
                
                mineImage.onload = function()
                {
                    for(var i = 0; i < $GM.mine; i++)
                    {
                        context.drawImage(mineImage, 450 + i*50, 94); 
                    }
                }
                
                mineImage.src = "image/mine.png";
            }
            
            if($GM.auction > 0)
            {
                var auctionImage = new Image();
                
                auctionImage.onload = function()
                {
                    context.drawImage(auctionImage, 670, 94); 
                }
                
                auctionImage.src = "image/auction.png";
            }
        }
        
        background.src = "image/background.png";
    }
};