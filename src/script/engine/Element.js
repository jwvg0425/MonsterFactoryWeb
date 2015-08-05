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
                    .attr("id", elemId)
                    .css("position","absolute");
    
    $("body").append(this.element);
    
    return true;
}

Element.prototype.update = function(interval)
{
    //css 갱신
    this.element.css("left", this.x);
    this.element.css("top", this.y);
}

//element를 보이게 한다
Element.prototype.visible = function(visible)
{
    this.visible = visible;
    
    if(visible);
}