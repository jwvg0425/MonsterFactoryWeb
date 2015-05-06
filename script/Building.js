var Building = 
{
    Building : function(options)
    {
        var element = $('<div>').addClass('building');
        
        element.append($('<div>').addClass('name').text(options.name));
        element.append($('<img>').attr('src',options.img));
        element.append($('<div>').addClass('desc').text(options.desc));
        element.append(Button.Button(options.button));
        
        return element;
    }
};