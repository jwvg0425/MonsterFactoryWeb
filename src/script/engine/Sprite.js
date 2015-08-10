//화면에 그림 그리기 담당.
var Sprite = function()
{
    Node.apply(this, arguments);
    this.image = null;
    this.isLoad = false;
}

Sprite.prototype = new Node();
Sprite.prototype.constructor = Sprite;

Sprite.prototype.init = function(imagePath)
{
    if(!Node.prototype.init())
        return false;

    //경로 기반으로 이미지 초기화
    var sprite = this;
    
    this.image = new Image();
    this.image.addEventListener("load",function()
    {
        sprite.isLoad = true;
    });
    
    this.image.src = imagePath;
};

Sprite.prototype.update = function(interval)
{
    
}

Sprite.prototype.render = function()
{
    var canvas = Engine.nowScene.getCanvas();
    
    if(this.isLoad)
    {
        canvas.drawImage(this.image,this.getWorldX(),this.getWorldY(),
                         this.image.width, this.image.height);
    }
}