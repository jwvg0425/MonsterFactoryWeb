var Colony =
{
    //몬스터 관리하는 콜로니 컨테이너.
    Colony : function(options)
    {
        var element = $('<div>').addClass('colony');
        
        element.append($('<div>').addClass('name').text(options.name));
        element.append($('<img>').attr('src',options.iconImg));
        element.append($('<div>').addClass('desc').text(options.desc));
        
        for(var i = 0; i < options.buttons.length; i++)
        {
            element.append(Button.Button(options.buttons[i]));
        }
        
        return element;
    },
    
    changeContents : function(colony, options)
    {
        colony.empty();
        
        colony.append($('<div>').addClass('name').text(options.name));
        colony.append($('<img>').attr('src',options.iconImg));
        colony.append($('<div>').addClass('desc').text(options.desc));
        
        for(var i = 0; i < options.buttons.length; i++)
        {
            colony.append(Button.Button(options.buttons[i]));
        }
    }
};