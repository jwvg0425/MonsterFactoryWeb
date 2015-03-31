var BuildingData =
{
    "colony" :
    {
        "name" : "콜로니",
        "img" : "image/colony.png",
        "desc" : "몬스터를 사육할 수 있는 시설입니다.",
        "button" :
        {
            "id" : "buy",
            "text" : "구매",
            "tooltip" : "<p>돈 300 소모</p><p>노예 5 소모</p>",
            "align" : "left",
            "x" : "60px",
            "y" : "10px",
            "click" : function()
            {
                $GM.addColony(1);
            },
            "resource" :
            [
                {
                    "kind" : "money",
                    "amount" : 300
                },
                {
                    "kind" : "slave",
                    "amount" : 5
                }
            ],
            "isEnableState" : function()
            {
                if($GM.colony >= $GM.maxColony)
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }
        }
    }
};