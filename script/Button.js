var Button =
{
    Button : function(options)
    {
        var element = $('<div>').addClass('button')
        .text(options.text)
        .attr('id',options.id);
        
        //툴팁 존재 여부
        if(options.tooltip != null)
        {
            var tooltip = $('<div>').addClass('tooltip')
                            .text(options.tooltip);
            
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
                var cool = $('<div>').attr('id','cooldown').on('transitionend', function()
                    {
                        if(cool.hasClass('down'))
                        {
                            cool.removeClass('down');
                            options.click();
                        }
                    });
            
                element.append(cool);
            
                element.on("click",function()
                {
                    if(!cool.hasClass('down'))
                    {
                        cool.addClass('down');
                    }
                });
            }
            else
            {
                element.on("click", options.click);
            }
        }
        
        return element;
    }
};