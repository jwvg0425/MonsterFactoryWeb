var ButtonData =
{
    "colonyBuy" : 
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
        "isEnableState" : function(button)
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
    },
    
    "mineBuy" :
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
        "isEnableState" : function(button)
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
    },
    "prisonBuy" : 
    {
        "id" : "buy",
        "text" : "구매",
        "tooltip" : "<p> 2000 골드 소모</p><p>30 노예 소모</p><p>5 보석 소모</p>",
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
            },
            {
                "kind" : "gem",
                "amount" : 5
            }
        ],
        "notification" : function()
        {
            return "수용소 건축을 완료했습니다.";
        }
    },
    "auctionBuy" :
    {
        "id" : "buy",
        "text" : "구매",
        "tooltip" : "<p> 1000 골드 소모</p><p>20 노예 소모</p>",
        "align" : "left",
        "x" : "110px",
        "y" : "10px",
        "isEnableState" : function(button)
        {
            if($GM.auction >= $GM.maxAuction)
            {
                return false;
            }
            else
            {
                return true;
            }   
        },
        "click" : function()
        {
            $GM.addAuction();
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
    },
    "kidnap" :
    {
        "id" : "kidnap",
        "text" : "납치",
        "tooltip" : "<p>노예로 부려먹을 인간을 납치합니다.</p> 50 골드 소모",
        "align" : "left",
        "cooldown" : 10000,
        "click" : function(button)
        {
            $GM.slave += 1;
        },
        "resource" :
        [
            {
                "kind" : "money",
                "amount" : 50
            }
        ],
        "notification" : function()
        {
            return "노예로 부려먹을 인간을 1명 납치했습니다.";
        }
    },
    "work" :
    {
        "id" : "work",
        "text" : "노동",
        "tooltip" : "직접 일해서 돈을 법니다.",
        "align" : "left",
        "cooldown" : 1000,
        "click" : function(button)
        {
            $GM.money += $GM.getClickMoney();
        },
        "notification" : function()
        {
            return "열심히 일해서 " + $GM.getClickMoney() + "골드를 모았습니다.";
        }
    },
    "eggBuy" :
    {
        "id" : "buyEgg",
        "text" : "알 구매",
        "tooltip" : "<p>콜로니에서 양육할 알을 구입합니다.</p>200 골드 소모",
        "align" : "left",
        "x" : "110px",
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
        "notification" : function()
        {
            return "몬스터의 알을 구매했습니다.";
        }
    },
    "stroke" :
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
        "notification" : function()
        {
            return "알을 부드럽게 쓰다듬어주었습니다.";
        },
        "isEnableState" : Button.checkButtonInGroupEnable
    },
    "water" :
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
        "notification" : function()
        {
            return "알에 물을 뿌려주었습니다.";
        },
        "isEnableState" :  Button.checkButtonInGroupEnable
    },
    "talk" :
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
        "notification" : function()
        {
            return "알에게 말을 걸어주었습니다.";
        },
        "isEnableState" :  Button.checkButtonInGroupEnable
    },
    "feed" :
    {
        "id" : "feed",
        "text" : "먹이주기",
        "tooltip" : "<p>맛있는 먹이를 줍니다.</p><p>10골드 소모</p>1노예 소모",
        "align" : "left",
        "x" : "20px",
        "y" : "10px",
        "cooldown" : 40000,
        "click" : function(button)
        {
            Colony.addExp(button.parent(), 20);
        },
        "resource" :
        [
            {
                "kind" : "money",
                "amount" : 10
            },
            {
                "kind" : "slave",
                "amount" : 1
            }
        ],
        "notification" : function()
        {
            return "몬스터에게 먹이를 주었습니다.";
        },
        "isEnableState" :  Button.checkButtonInGroupEnable
    },
    "meditation" :
    {
        "id" : "meditation",
        "text" : "명상",
        "tooltip" : "<p>정신 수양을 위해 명상을 시킵니다.</p>",
        "align" : "left",
        "y" : "10px",
        "cooldown" : 50000,
        "click" : function(button)
        {
            Colony.addExp(button.parent(), 50);
        },
        "notification" : function()
        {
            return "몬스터의 명상이 끝났습니다.";
        },
        "isEnableState" :  Button.checkButtonInGroupEnable
    },
    "sleep" :
    {
        "id" : "sleep",
        "text" : "숙면",
        "tooltip" : "<p>건강을 위해 숙면을 취합니다.</p>",
        "align" : "left",
        "y" : "10px",
        "cooldown" : 20000,
        "click" : function(button)
        {
            Colony.addExp(button.parent(), 30);
        },
        "notification" : function()
        {
            return "유충이 푹 자고 일어났습니다.";
        },
        "isEnableState" :  Button.checkButtonInGroupEnable
    },
    "mining" :
    {
        "id" : "mining",
        "text" : "채굴",
        "tooltip" : "<p>광산에서 채굴을 합니다</p>",
        "align" : "left",
        "cooldown" : 20000,
        "click" : function(button)
        {
            $GM.money += 10 * $GM.slave;
            if(Math.random() < 0.1)
            {
                $GM.gem += 1;
            }
        },
        "resource" :
        [
        ],
        "notification" : function()
        {
            return "채굴을 완료했습니다.";
        }
    }
};