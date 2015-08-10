//animation
var Animation = function()
{
    Node.apply(this, arguments);
    this.frames = [];
    this.images = [];
    this.totalLength = 0;
    this.totalFrame = 0;
    this.loadFrame = 0;
    this.playLength = 0;
    this.nowFrame = 0;
}

Animation.prototype = new Node();
Animation.prototype.constructor = Animation;

Animation.prototype.init = function(frames)
{
    if(!Node.prototype.init())
        return false;
    
    this.frames = frames;
    this.totalFrame = frames.length;
    var animation = this;
    
    for(var i = 0; i < frames.length; i+=1)
    {
        var image = new Image();
        
        image.addEventListener("load", function()
        {
            animation.loadFrame += 1;
        });
    
        image.src = this.frames[i].src;
        this.images.push(image);
        
        this.totalLength += this.frames[i].length;
    }
    
    return true;
}

Animation.prototype.update = function(interval)
{
    if(this.playLength >= this.frames[this.nowFrame].length)
    {
        this.playLength = 0;
        this.nowFrame +=1;
        
        if(this.nowFrame >= this.totalFrame)
            this.nowFrame = 0;
    }
    else
    {
        this.playLength += 1;
    }
}

Animation.prototype.render = function()
{
    var canvas = Engine.nowScene.getCanvas();
    
    if(this.loadFrame == this.totalFrame)
    {
        var image = this.images[this.nowFrame];
        canvas.drawImage(image,this.getWorldX(),this.getWorldY(),
                         image.width, image.height);
    }
}