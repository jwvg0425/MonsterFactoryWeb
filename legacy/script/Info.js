var Info = 
{
    Info : function(options)
    {
        var element = $('<div>').addClass('info')
                                .data("update",Info.update)
                                .data("texts",options.texts);
        
        $GM.updateList.push(element);
        
        return element;
    },
    
    update : function(info, frame)
    {
        info.text( info.data("texts")());
    }
};