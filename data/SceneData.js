//여러가지 html 요소 담는 통.
var ContainerData =
{
    "act" :
    {
        "class" : "actContainer",
        "buttons" :
        [
            {
                "id" : "test1",
                "text" : "테스트"
            }
        ]
    },
    
    "building" :
    {
        "class" : "buildingContainer",
        "buttons" :
        [
            {
                "id" : "test2",
                "text" : "테스트2"
            }
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
            ContainerData.act
        ]
    },
    
    "building" :
    {
        "id" : "building",
        "title" : "건물",
        "containers" :
        [
            ContainerData.building
        ]
    }
};