var Colony =
{
    //몬스터 관리하는 콜로니 컨테이너.
    Colony : function(options)
    {
        var element = $('<div>').addClass('colony');
        
        Colony.addContents(element, options);
        setInterval(Colony.draw.bind(element), 100);
        
        return element;
    },
    
    changeContents : function(colony, options)
    {
        colony.empty();
        
        Colony.addContents(colony, options);
    },
    
    addContents : function(colony, options)
    {
        colony.append($('<div>').addClass('name').text(options.name));
        colony.append($('<canvas>').attr('id','monsterImage').attr('width', '44').attr('height','44'));
        colony.append($('<div>').addClass('desc').text(options.desc));
        var images = [];
        
        for(var i = 0; i < options.iconImage.length; i++)
        {
            var image = new Image();
            image.src = options.iconImage[i];
            images.push(image);
        }
        
        colony.data("images",images);
        colony.data("nowFrame",0);
        
        for(var i = 0; i < options.buttons.length; i++)
        {
            colony.append(Button.Button(options.buttons[i]));
        }
    },
    
    draw : function()
    {
        var canvas = this.find("#monsterImage")[0];
        var context = canvas.getContext("2d");
        var imageNum = this.data("images").length;
        var imageIdx = this.data("nowFrame");
        
        context.drawImage(this.data("images")[imageIdx], 2, 2, 40, 40);
        
        imageIdx++;
        
        if(imageIdx >= this.data("images").length)
        {
            imageIdx = 0;
        }
        
        this.data("nowFrame", imageIdx);
    }
};