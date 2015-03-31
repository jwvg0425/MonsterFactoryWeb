var Button =
{
    Button : function(options)
    {
        var element = $('<div>').addClass('button')
        .text(options.text)
        .attr('id',options.id)
        .data("resource",options.resource)
        .data("update",Button.update);
        
        //툴팁 존재 여부
        if(options.tooltip != null)
        {
            var tooltip = $('<div>').addClass('tooltip')
                            .html(options.tooltip);
            
            element.append(tooltip);
            
            element.hover(
            function()
            {
                if(!element.hasClass('disabled'))
                {
                    tooltip.css('display','block');
                }
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
        
        if(options.x != null)
        {
            element.css("margin-left", options.x);
        }
        
        if(options.y != null)
        {
            element.css("margin-top",options.y);
        }
        
        if(options.isEnableState != null)
        {
            element.data("isEnableState",options.isEnableState);
            $GM.updateList.push(element);
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
                        if(!Button.checkResource(element) || element.hasClass('disabled'))
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
                            
                            //notification 발송
                            if(options.notification != null)
                            {
                                Notification.Notification(options.notification);
                            }
                        });
                    }
                });
            }
            else
            {
                
                element.on("click", function()
                {
                    if(!Button.checkResource(element) || element.hasClass('disabled'))
                    {
                        return;
                    }
                    
                    Button.consumeResource(element);
                    
                    options.click();
                    
                    //notification 발송
                    if(options.notification != null)
                    {
                        Notification.Notification(options.notification);
                    }
                });
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
    },
    
    update : function(button, frame)
    {
        if(button.hasClass("disabled"))
        {
            if(button.data("isEnableState")())
            {
                button.removeClass("disabled");
            }
        }
        else
        {
            if(!button.data("isEnableState")())
            {
                button.addClass("disabled");
            }
        }
    }
};