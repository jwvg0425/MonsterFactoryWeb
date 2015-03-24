var Scene =
{
    Scene : function(data)
    {
        var element = $('<div>').addClass('scene')
        .attr('id',data.id)
        .data('title',data.title)
        
        var containerData = data.containers;
        
        for(var i = 0; i < containerData.length; i++)
        {
            var container = $('<div>').addClass(containerData[i].class);
            
            var buttonData = containerData[i].buttons;
            
            for(var i = 0; i < buttonData.length; i++)
            {
                var button = new Button.Button(buttonData[i]);
    
                container.append(button);
            }
            
            element.append(container);
        }
        
        return element;
    },
    
    disable : function(scene)
    {
        scene.addClass('disabled');
    },
    
    enable : function(scene)
    {
        scene.removeClass('disabled');
    }
};