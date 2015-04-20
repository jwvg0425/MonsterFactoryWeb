var ContainerData =
{
    "act" :
    {
        "class" : "act",
        "head" : "행동",
        "width" : 700,
        "objects" : function()
        {
            var arr = [];
            
            arr.push(
                new Button.Button({
                    "id" : "kidnap",
                    "text" : "납치",
                    "tooltip" : "<p>노예로 부려먹을 인간을 납치합니다.</p> 50 골드 소모",
                    "align" : "left",
                    "cooldown" : 10000,
                    "click" : function()
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
                    "notification" : "노예로 부려먹을 인간을 1명 납치했습니다."
                })
            );
            
            arr.push(    
                new Button.Button({
                    "id" : "work",
                    "text" : "노동",
                    "tooltip" : "직접 일해서 돈을 법니다.",
                    "align" : "left",
                    "cooldown" : 1000,
                    "click" : function()
                    {
                        $GM.money += 10;
                    },
                    "notification" : "열심히 일해서 10 골드를 모았습니다."
                })
            );
            
            return arr;
        }
    },
    
    "building" :
    {
        "class" : "building",
        "head" : "건물",
        "width" : 330,
        "objects" : function()
        {
            var arr = [];
            
            arr.push(
                new Building.Building(BuildingData.colony)
            );
            
            return arr;
        }
    },
    
    "monster" :
    {
        "class" : "monster",
        "head" : "몬스터",
        "width" : 700,
        "objects" : function()
        {
            var arr = [];
            return arr;
        }
    },
    
    "infomation" :
    {
        "class" : "infomation",
        "head" : "정보",
        "width" : 330,
        "objects" : function()
        {
            var arr = [];
            
            arr.push(
                new Info.Info({
                    texts : function()
                    {
                        return "골드 : " + $GM.money + "( +" + $GM.slave + "/s)";
                    },
                })
            );
            
            arr.push(
                new Info.Info({
                    texts : function()
                    {
                        return "노예 : " + $GM.slave;
                    }
                })
            );
            
            arr.push(
                new Info.Info({
                    texts : function()
                    {
                        return "콜로니 : " + $GM.colony + " / " + $GM.maxColony;
                    }
                })
            );
            
            return arr;
        }
    }
};