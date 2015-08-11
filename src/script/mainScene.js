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
    background.setPosition(0,160-25);
    background.zOrder = -1;
    this.addChild(background);
    
    var button = new Button();
    button.init('test','test');
    button.setPosition(20,170);
    this.addChild(button);
    
    return true;
}