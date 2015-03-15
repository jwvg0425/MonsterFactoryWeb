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
    
    frame : 0,
    
    scenes : []
};

//alias
var $GM = GameManager;