var Button = function()
{
    Element.apply(this, arguments);   
}

Button.prototype = new Element();
Button.prototype.constructor = Button;
Button.prototype.init = function(id, text)
{
    if(!Element.prototype.init.apply(this,['div','button',id]))
    {
        return false;
    }
    
    this.element.text(text);
    
    return true;
}