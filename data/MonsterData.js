var MonsterData =
{
    "none" :
    {
        "name" : "텅 빈 콜로니",
        "iconImg" : "image/none.png",
        "desc" : "아무 것도 없는 콜로니다. 이 곳에서 몬스터를 키울 수 있다.",
        "buttons" :
        [
            {
                "id" : "buyEgg",
                "text" : "알 구매",
                "tooltip" : "<p>콜로니에서 양육할 알을 구입합니다.</p>200 골드 소모",
                "align" : "left",
                "x" : "60px",
                "y" : "10px",
                "click" : function(button)
                {
                    var egg = MonsterData.egg;
                    var type = Math.floor(Math.random() * 8);
                    
                    egg.iconImg = "image/egg" + type + ".png";
                    
                    Colony.changeContents(button.parent(),egg);
                },
                "resource" :
                [
                    {
                        "kind" : "money",
                        "amount" : 200
                    }
                ],
                "notification" : "몬스터의 알을 구매했습니다."
            }
        ]
    },
    "egg" :
    {
        "name" : "알",
        "iconImg" : "image/egg0.png",
        "desc" : "몬스터의 알. 어떤 몬스터일지는 알 수 없다.",
        "buttons" :
        [
        ]
    }
};