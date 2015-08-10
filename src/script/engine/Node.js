var Node = function()
{
    Ref.apply(this, arguments);
    this.x = 0;
    this.y = 0;
    this.childs = []
    this.parent = null
}

Node.prototype = new Ref();
Node.prototype.constructor = Node;

Node.prototype.init = function()
{
    if(!Ref.prototype.init.apply(this))
        return false;
    
    return true;
}

Node.prototype.addChild = function(child)
{
    Engine.nowScene.pool.push(child);
    this.childs.push(child);
    child.parent = this;
}

Node.prototype.getWorldX = function()
{
    if(this.parent == null)
        return this.x;
    
    return this.x + this.parent.getWorldX();
}

Node.prototype.getWorldY = function()
{
    if(this.parent == null)
        return this.y;
    
    return this.y + this.parent.getWorldY();
}