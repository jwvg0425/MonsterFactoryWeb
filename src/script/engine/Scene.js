var Scene = function()
{
    Element.apply(this, arguments);
    this.pool = [];
    this.newPool = [];
    this.canvas = null;
}

Scene.prototype = new Element();
Scene.prototype.constructor = Scene;

Scene.prototype.init = function(id)
{
    if(!Element.prototype.init.apply(this, ["div", "scene", id]))
        return false;
    
    this.canvas = new Element();
    this.canvas.init('canvas','sceneCanvas','sceneCanvas');
    
    this.canvas.element[0].setAttribute('width',800);
    this.canvas.element[0].setAttribute('height',600);
    
    $('body').append(this.element);
    this.addChild(this.canvas);
    
    return true;
}

Scene.prototype.update = function(interval)
{
    if(this.newPool.length > 0)
    {
        for(var i = 0; i < this.newPool.length; i +=1)
        {
            this.pool.push(this.newPool[i]);
        }
        
        this.pool.sort(function(a,b){return a.zOrder - b.zOrder;});
        
        this.newPool = [];
    }
    
    for(var i = 0; i < this.pool.length; i+=1)
    {
        this.pool[i].update(interval);
    }
}

Scene.prototype.render = function()
{
    var canvas = this.getCanvas();
    
    canvas.clearRect(0,0,800,600);
    
    for(var i = 0; i < this.pool.length; i+=1)
    {
        this.pool[i].render();
    }
}

Scene.prototype.getCanvas = function()
{
    return this.canvas.element[0].getContext('2d');
}

Scene.prototype.addChild = function(child)
{
    this.newPool.push(child);
    this.childs.push(child);
    child.parent = this;
    
    if(child.element != null && child.element != undefined)
        this.element.append(child.element);
}