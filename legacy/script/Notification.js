var Notification =
{
    Notification : function(text)
    {
        var element = $('<div>').addClass('notification');
        
        element.text(text);
        element.delay(1000).animate({'opacity' : 0}, 3000, "linear", function()
        {
            element.remove();
        });
        
        $('#notifications').prepend(element);
        
        return element;
    }
};