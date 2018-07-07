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
                new Button.Button(ButtonData.kidnap)
            );
            
            arr.push(    
                new Button.Button(ButtonData.work)
            );
            
            return arr;
        }
    },
    
    "building" :
    {
        "class" : "buildings",
        "head" : "건물",
        "width" : 430,
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
        "width" : 430,
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
        "width" : 230,
        "objects" : function()
        {
            var arr = [];
            
            arr.push(
                new Info.Info({
                    texts : function()
                    {
                        return "골드 : " + $GM.money + "( +" + $GM.getMoneyPerSec() + "/s)";
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