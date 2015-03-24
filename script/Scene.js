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
            var container = new Container.Container(containerData[i]);
            
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