var GameManager =
{
    init : function()
    {
        $GM.initScenes();
    },
    
    initScenes : function()
    {
        var monster = new Scene.Scene(SceneData["monster"]);
        var building = new Scene.Scene(SceneData["building"]);
        
        $GM.addScene(monster);
        $GM.addScene(building);
        
        $GM.toScene(building);
    },
    
    addScene : function(scene)
    {
        var header = $('#header');
        var headerButton = $('<div>').addClass('headerButton')
        .text(scene.data('title'))
        .attr('id', scene.attr('id') + 'Header');
        
        header.append(headerButton);
        
        //기본적으로 안 보임. 선택되면 보임
        scene.css('display','none');
        var contents = $('#contents');
        contents.append(scene);
        $GM.scenes.push(scene);
    },
    
    toScene : function(scene)
    {
        if($GM.nowScene != null)
        {
            $GM.nowScene.css('display','none');
        }
        
        scene.css('display','block');
        $GM.nowScene = scene;
    },
    
    frame : 0,
    
    scenes : [],
    
    nowScene : null
};

//alias
var $GM = GameManager;