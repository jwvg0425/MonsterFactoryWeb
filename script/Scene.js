var Scene =
{
    Scene : function(data)
    {
        var element = $('<div>').addClass('scene')
        .attr('id',data.id)
        .data('title',data.title)
        
        return element;
    }
};