var MainScene = function()
{
    Scene.apply(this, arguments);
}

MainScene.prototype = new Scene();
MainScene.prototype.constructor = MainScene;

MainScene.prototype.init = function()
{
    if(!Scene.prototype.init.apply(this, ['mainScene']))
        return false;
    
    var background = new Sprite();
    background.init('image/background.png');
    background.x = 0;
    background.y = 160 - 25;
    
    this.addChild(background);
    
    return true;
}