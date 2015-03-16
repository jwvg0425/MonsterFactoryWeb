var Scene =
{
    Scene : function(data)
    {
        var element = $('<div>').addClass('scene')
        .attr('id',data.id)
        .data('title',data.title)
        
        var button = new Button.Button(
            {
                'text' : "테스트",
                'id' : "test"
            });
    
        element.append(button);
        
        return element;
    }
};