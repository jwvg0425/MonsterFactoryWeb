var MonsterData =
{
    "none" :
    {
        "name" : "텅 빈 콜로니",
        "iconImage" : ["image/none.png"],
        "desc" : "아무 것도 없는 콜로니다. 이 곳에서 몬스터를 키울 수 있다.",
        "exp" : 0,
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
                    Colony.addExp(button.parent(), 1);
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
        ],
        "evolve" : function(colony)
        {
            var egg = MonsterData.egg;
            var type = Math.floor(Math.random() * 8);
                    
            egg.iconImage[0] = "image/egg" + type + ".png";
                    
            Colony.changeContents(colony,egg);
        }
    },
    "egg" :
    {
        "name" : "알",
        "iconImage" : ["image/egg0.png"],
        "desc" : "몬스터의 알. 어떤 몬스터일지는 알 수 없다.",
        "exp" : 100,
        "buttons" :
        [
            {
                "id" : "stroke",
                "text" : "쓰다듬기",
                "tooltip" : "<p>알을 부드럽게 쓰다듬어 줍니다.</p>",
                "align" : "left",
                "x" : "20px",
                "y" : "10px",
                "cooldown" : 10000,
                "click" : function(button)
                {
                    Colony.addExp(button.parent(), 5);
                },
                "notification" : "알을 부드럽게 쓰다듬어주었습니다."
            },
            {
                "id" : "water",
                "text" : "물 뿌리기",
                "tooltip" : "<p>알에 물을 뿌립니다.</p>100골드 소모",
                "align" : "left",
                "y" : "10px",
                "cooldown" : 20000,
                "click" : function(button)
                {
                    Colony.addExp(button.parent(), 10);
                },
                "resource" :
                [
                    {
                        "kind" : "money",
                        "amount" : 100
                    }
                ],
                "notification" : "알에 물을 뿌려주었습니다."
            },
            {
                "id" : "talk",
                "text" : "말 걸기",
                "tooltip" : "<p>알에게 말을 겁니다.</p>",
                "align" : "left",
                "y" : "10px",
                "cooldown" : 30000,
                "click" : function(button)
                {
                    Colony.addExp(button.parent(), 15);
                },
                "notification" : "알에게 말을 걸어주었습니다."
            }
        ],
        "evolve" : function(colony)
        {
            Colony.changeContents(colony, MonsterData.larva);
        }
    },
    "larva" :
    {
        "name" : "유충",
        "iconImage" : ["image/larva0.png", "image/larva1.png"],
        "desc" : "몬스터의 유충이다.",
        "exp" : 200,
        "buttons" :
        []
    }
};