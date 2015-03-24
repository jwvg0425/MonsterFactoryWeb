//여러가지 html 요소 담는 통.
var ContainerData =
{
    "act" :
    {
        "class" : "actContainer",
        "buttons" :
        [
            {
                "id" : "kidnap",
                "text" : "납치",
                "tooltip" : "노예로 부려먹을 인간을 납치합니다."
            }
        ]
    },
    
    "building" :
    {
        "class" : "buildingContainer",
        "buttons" :
        [
        ]
    }
};

var SceneData =
{
    "monster" :
    {
        "id" : "monster",
        "title" : "몬스터",
        "containers" :
        [
        ]
    },
    
    "building" :
    {
        "id" : "building",
        "title" : "건물",
        "containers" :
        [
            ContainerData.act,
            ContainerData.building
        ]
    }
};