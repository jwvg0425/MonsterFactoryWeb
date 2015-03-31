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
        
        $GM.addScene(building);
        $GM.addScene(monster);
    },
    
    addScene : function(scene)
    {
        var header = $('#header');
        var headerButton = $('<div>').addClass('headerButton')
        .text(scene.data('title'))
        .attr('id', scene.attr('id') + 'Header')
        .data('scene',scene);
        
        headerButton.click(function()
        {
            if($GM.nowHeader != null)
            {
                $GM.nowHeader.removeClass('selected');
            }
            
            $GM.nowHeader = headerButton;
            $GM.nowHeader.addClass('selected');
            $GM.toScene(scene);
        });
        
        header.append(headerButton);
        
        //기본적으로 안 보임. 선택되면 보임
        Scene.disable(scene);
        var contents = $('#contents');
        contents.append(scene);
        $GM.scenes.push(scene);
    },
    
    toScene : function(scene)
    {
        if($GM.nowScene != null)
        {
            Scene.disable($GM.nowScene);
        }
        
        Scene.enable(scene);
        $GM.nowScene = scene;
    },
    
    updateBySecond : function()
    {
        $GM.money += $GM.slave;
    },
    
    frame : 0,
    
    money : 0,
    slave : 0,
    
    scenes : [],
    
    nowScene : null,
    nowHeader : null,
    
    updateList : []
};

//alias
var $GM = GameManager;