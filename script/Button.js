var Button =
{
    Button : function(options)
    {
        var element = $('<div>').addClass('button')
        .text(options.text)
        .attr('id',options.id);
        
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
        
        if(options.align == "left")
        {
            element.css("float","left");
        }
        
        return element;
    }
};