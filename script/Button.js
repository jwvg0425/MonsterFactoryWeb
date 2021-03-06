var Button =
{
    Button : function(options)
    {
        var element = $('<div>').addClass('button')
        .text(options.text)
        .attr('id',options.id)
        .data("resource",options.resource)
        .data("update",Button.update)
        .data("cool", 0);
        
        //툴팁 존재 여부
        if(options.tooltip != null)
        {
            var tooltip = $('<div>').addClass('tooltip')
                            .html(options.tooltip);
            
            element.append(tooltip);
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
        
        element.data("isEnableState",options.isEnableState);
        $GM.updateList.push(element);
        
        if(options.click != null)
        {
            if(options.cooldown != null)
            {
                //쿨다운이 있는 경우 쿨다운 끝나고 처리.
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
                        
                        element.data("cool",1);
                        element.addClass("disabled");
                        cool.addClass('cool')
                        .animate({width : "0%"}, options.cooldown, 'linear',
                        function()
                        {
                            element.data("cool",0);
                            cool.removeClass('cool').css("width","100%");
                            options.click(element);
                            
                            //notification 발송
                            if(options.notification != null)
                            {
                                Notification.Notification(options.notification());
                            }
                        });
                    }
                });
            }
            else
            {
                //쿨다운 없는 경우 바로 처리.
                element.on("click", function()
                {
                    if(!Button.checkResource(element) || element.hasClass('disabled'))
                    {
                        return;
                    }
                    
                    Button.consumeResource(element);
                    
                    options.click(element);
                    
                    //notification 발송
                    if(options.notification != null)
                    {
                        Notification.Notification(options.notification());
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
            if(!Button.checkResource(button))
            {
                return;
            }
            if(button.data("cool") == 1)
            {
                return;
            }
            
            if(button.data("isEnableState") == null)
            {
                button.removeClass("disabled");
                return;
            }
            
            if(button.data("isEnableState") != null &&
               button.data("isEnableState")(button))
            {
                button.removeClass("disabled");
                return;
            }
        }
        else
        {
            if(!Button.checkResource(button))
            {
                button.addClass("disabled");
                return;
            }
            
            if(button.data("isEnableState") != null &&
               !button.data("isEnableState")(button))
            {
                button.addClass("disabled");
                return;
            }
        }
    },
    
    checkButtonInGroupEnable : function(button)
    {
        var buttons = button.parent().find('.button');
        var res = true;
        
        buttons.each( function()
        {
            var $this = $(this);
            
            if($this != button)
            {
                if($this.find('#cooldown').hasClass('cool'))
                {
                    res = false;
                }
            }
        });
        
        return res;
    }
};