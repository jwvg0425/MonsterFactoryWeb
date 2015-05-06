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
            "tooltip" : "<p>300 골드 소모</p><p>5 노예 소모</p>",
            "align" : "left",
            "x" : "110px",
            "y" : "10px",
            "click" : function(button)
            {
                $GM.addColony();
                $(".container.monster").append(new Colony.Colony(MonsterData.none));
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
            },
            "notification" : function()
            {
                return "콜로니를 건축 완료했습니다.";
            }
        }
    },
    
    "mine" :
    {
        "name" : "광산",
        "img" : "image/colony.png",
        "desc" : "광물을 채굴할 수 있는 시설입니다. 골드 획득량이 증가합니다.",
        "button" :
        {
            "id" : "buy",
            "text" : "구매",
            "tooltip" : "<p>500 골드 소모</p><p>10 노예 소모</p>",
            "align" : "left",
            "x" : "110px",
            "y" : "10px",
            "click" : function(button)
            {
                $GM.addMine();
            },
            "resource" :
            [
                {
                    "kind" : "money",
                    "amount" : 500
                },
                {
                    "kind" : "slave",
                    "amount" : 10
                }
            ],
            "isEnableState" : function()
            {
                if($GM.mine >= $GM.maxMine)
                {
                    return false;
                }
                else
                {
                    return true;
                }   
            },
            "notification" : function()
            {
                return "광산을 건축 완료했습니다.";
            }
        }
    },
    
    "prison" : 
    {
        "name" : "수용소",
        "img" : "image/colony.png",
        "desc" : "용사를 납치하여 가둘 수 있는 건물입니다.",
        "button" :
        {
            "id" : "buy",
            "text" : "구매",
            "tooltip" : "<p> 2000 골드 소모</p><p>30 노예 소모</p>",
            "align" : "left",
            "x" : "110px",
            "y" : "10px",
            "click" : function()
            {
            },
            "resource":
            [
                {
                    "kind" : "money",
                    "amount" : 2000
                },
                {
                    "kind" : "slave",
                    "amount" : 30
                }
            ],
            "notification" : function()
            {
                return "수용소 건축을 완료했습니다.";
            }
        }
    },
    
    "auction" :
    {
        "name" : "경매장",
        "img" : "image/colony.png",
        "desc" : "몬스터나 알을 사고 팔 수 있는 건물입니다.",
        "button" :
        {
            "id" : "buy",
            "text" : "구매",
            "tooltip" : "<p> 1000 골드 소모</p><p>20 노예 소모</p>",
            "align" : "left",
            "x" : "110px",
            "y" : "10px",
            "click" : function()
            {
            },
            "resource":
            [
                {
                    "kind" : "money",
                    "amount" : 1000
                },
                {
                    "kind" : "slave",
                    "amount" : 20
                }
            ],
            "notification" : function()
            {
                return "경매장 건축을 완료했습니다.";
            }
        }
    }
};