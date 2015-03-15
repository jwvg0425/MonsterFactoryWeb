//여러가지 html 요소 담는 통.
var ContainerData =
{
    "act" :
    {
        "class" : "actContainer",
    },
    
    "building" :
    {
        "class" : "buildingContainer"
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
            ContainerData["building"]
        ]
    }
};