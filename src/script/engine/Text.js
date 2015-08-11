var Text = function()
{
    Element.apply(this, arguments);
    this.text = "";
}

Text.prototype = new Element();
Text.prototype.constructor = Text;

Text.prototype.init = function(type, id, text)
{
    if(!Element.prototype.init.apply(this,['div', type, id]))
       return false;
       
    this.text = text;
    this.element.text(text);
       
    return true;
}

Text.prototype.setText = function(text)
{
    this.text = text;
    this.element.text(text);
}