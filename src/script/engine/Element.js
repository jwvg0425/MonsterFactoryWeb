//html 상에서 하나의 원소를 나타냄

var Element = function()
{
    Node.apply(this, arguments);
    this.element = null;
    this.visible = true;
}

Element.prototype = new Node();
Element.prototype.constructor = Element;

Element.prototype.init = function(elemType, elemClass, elemId)
{
    if(!Node.prototype.init.apply(this))
        return false;
    
    this.element = $("<" + elemType + ">")
                    .addClass(elemClass)
                    .attr("id", elemId);
    
    return true;
}

Element.prototype.update = function(interval)
{
    //css 갱신
    this.element.css("left", this.x);
    this.element.css("top", this.y);
}

Element.prototype.addChild = function(child)
{
    Node.prototype.addChild.apply(this, [child]);

    if(child.element != null && child.element != undefined)
        this.element.append(child.element);
}

//element를 보이게 한다
Element.prototype.visible = function(visible)
{
    this.visible = visible;
    
    if(visible)
        this.element.show();
    else
        this.element.hide();
}