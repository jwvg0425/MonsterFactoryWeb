var Button =
{
    Button : function(options)
    {
        var element = $('<div>').addClass('button')
        .text(options.text)
        .attr('id',options.id)
        .data("resource",options.resource);
        
        //툴팁 존재 여부
        if(options.tooltip != null)
        {
            var tooltip = $('<div>').addClass('tooltip')
                            .html(options.tooltip);
            
            element.append(tooltip);
            
            element.hover(
            function()
            {
                tooltip.css('display','block');
            },
            function()
            {
                tooltip.css('display','none');
            });
        }
        
        //가로 정렬인지 세로 정렬인지 설정
        if(options.align == "left")
        {
            element.css("float","left");
        }
        
        if(options.click != null)
        {
            if(options.cooldown != null)
            {
                var cool = $('<div>').attr('id','cooldown');
            
                element.append(cool);
            
                element.on("click",function()
                { 
                    if(!cool.hasClass('cool'))
                    {
                        if(!Button.checkResource(element))
                        {
                            return;
                        }
                    
                        Button.consumeResource(element);
                        
                        cool.addClass('cool')
                        .animate({width : "0%"}, options.cooldown, 
                        function()
                        {
                            cool.removeClass('cool').css("width","100%");
                            options.click();
                        });
                    }
                });
            }
            else
            {
                element.on("click", options.click);
            }
        }
        
        return element;
    },
    
    checkResource : function(button)
    {
        var resource = button.data("resource");
        
        if(resource == null)
        {
            return true;
        }
        
        for(var i = 0 ; i < resource.length; i++)
        {
            if($GM[resource[i].kind] < resource[i].amount)
            {
                return false;
            }
        }
        
        return true;
    },
    
    consumeResource : function(button)
    {
        var resource = button.data("resource");
        
        if(resource == null)
        {
            return;
        }
        
         for(var i = 0 ; i < resource.length; i++)
        {
            $GM[resource[i].kind] -= resource[i].amount;
        }
    }
};