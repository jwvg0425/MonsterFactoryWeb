var Ref = function()
{
    //기본적으로 1.
    this.ref = 1;
}

Ref.prototype.addRef = function() 
{
    this.ref += 1;
}

Ref.prototype.releaseRef = function()
{
    this.ref -= 1;
    
    //ref가 0이 되면 engine의 update loop에서 제거하게끔
    if(this.ref == 0)
    {
    }
}

Ref.prototype.update = function(interval)
{
    //매 프레임 갱신 동작
}

Ref.prototype.render = function(interval)
{
    //매 프레임 그리기 동작
}