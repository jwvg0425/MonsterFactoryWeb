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
            ButtonData.eggBuy
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
            ButtonData.stroke,
            ButtonData.water,
            ButtonData.talk
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
        [
            ButtonData.feed,
            ButtonData.meditation,
            ButtonData.sleep
        ]
    }
};