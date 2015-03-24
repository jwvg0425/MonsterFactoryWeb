var Container =
{
    Container : function(options)
    {
        var element = $('<div>')
        .addClass("container")
        .addClass(options.class);
        
        if(options.head != null)
        {
            var head = $('<p>')
            .addClass("containerHead")
            .text("● " + options.head);
            
            element.append(head);
        }
        
        if(options.width != null)
        {
            element.css("width", options.width);
        }
        
        if(options.height != null)
        {
            element.css("height", options.height);
        }
            
        var buttonData = options.buttons;
            
        for(var i = 0; i < buttonData.length; i++)
        {
            var button = new Button.Button(buttonData[i]);
    
            element.append(button);
        }
        
        return element;
    }
};