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
        
        //버튼 추가
        if(options.objects != null)
        {
            var objects = options.objects;
            
            for(var i = 0; i < objects.length; i++)
            {
                element.append(objects[i]);
            }
        }
        
        return element;
    }
};