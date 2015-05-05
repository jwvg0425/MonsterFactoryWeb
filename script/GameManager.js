var GameManager =
{
    init : function()
    {
        $GM.initScenes();
    },
    
    initScenes : function()
    {
        var building = new Scene.Scene(SceneData["building"]);
        
        $GM.addScene(building);
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
    
    addColony : function()
    {
        if($GM.colony == 0)
        {
            var monster = new Scene.Scene(SceneData["monster"]);
            
            $GM.addScene(monster);
        }
        
        if($GM.colony >= $GM.maxColony)
        {
            return;
        }
        
        $GM.colony += 1;
        
        Engine.draw();
    },
    
    frame : 0,
    
    money : 10000,
    slave : 100,
    colony : 0,
    maxColony : 3,
    
    scenes : [],
    
    nowScene : null,
    nowHeader : null,
    
    updateList : []
};

//alias
var $GM = GameManager;