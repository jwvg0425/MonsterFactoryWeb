var ContainerData =
{
    "act" :
    {
        "class" : "act",
        "head" : "행동",
        "width" : 700,
        "buttons" :
        [
            {
                "id" : "kidnap",
                "text" : "납치",
                "tooltip" : "노예로 부려먹을 인간을 납치합니다.",
                "align" : "left",
                "cooldown" : 10000,
                "click" : function()
                {
                    console.log("click");
                }
            },
            {
                "id" : "work",
                "text" : "노동",
                "tooltip" : "직접 일해서 돈을 법니다.",
                "align" : "left",
                "cooldown" : 1000,
                "click" : function()
                {
                    console.log("click2");
                }
            }
        ]
    },
    
    "building" :
    {
        "class" : "building",
        "head" : "건물",
        "width" : 330,
        "buttons" :
        [
        ]
    },
    
    "monster" :
    {
        "class" : "monster",
        "head" : "몬스터",
        "width" : 700,
        "buttons" :
        [
        ]
    },
    
    "infomation" :
    {
        "class" : "infomation",
        "head" : "정보",
        "width" : 330,
        "buttons" :
        [
        ]
    }
};