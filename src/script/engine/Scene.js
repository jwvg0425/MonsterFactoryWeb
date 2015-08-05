var Scene = function()
{
    Element.apply(this, arguments);
    this.pool = [];
}

Scene.prototype = new Element();
Scene.prototype.constructor = Scene;

Scene.prototype.init = function(id)
{
    if(!Element.prototype.init.apply(this, ["canvas", "scene", id]))
        return false;
    
    return true;
}

Scene.prototype.update = function(interval)
{
    for(var i = 0; i < this.pool.length; i+=1)
    {
        this.pool[i].update(interval);
    }
}

Scene.prototype.render = function()
{
    for(var i = 0; i < this.pool.length; i+=1)
    {
        this.pool[i].render();
    }
}