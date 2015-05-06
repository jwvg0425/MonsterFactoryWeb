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
        $GM.money += $GM.getMoneyPerSec();
    },
    
    addColony : function()
    {
        if($GM.colony == 0)
        {
            var monster = new Scene.Scene(SceneData["monster"]);
            
            $GM.addScene(monster);
            
            Container.addObject($('div.container.buildings'),
                                new Building.Building(BuildingData.mine));
            
            Container.addObject($('div.container.buildings'),
                                new Building.Building(BuildingData.auction));
            
            var infomation = $('div.container.infomation');
            
            infomation.each(function()
            {
                Container.addObject($(this),
                new Info.Info({
                    texts : function()
                    {
                        return "보석 : " + $GM.gem;
                    }
                }));
                
                Container.addObject($(this),
                new Info.Info({
                    texts : function()
                    {
                        return "광산 : " + $GM.mine + " / " + $GM.maxMine;
                    }
                }));
                
                Container.addObject($(this),
                new Info.Info({
                    texts : function()
                    {
                        return "경매장 : " + $GM.auction + " / " + $GM.maxAuction;
                    }
                }));
            });
        }
        
        if($GM.colony >= $GM.maxColony)
        {
            return;
        }
        
        $GM.colony += 1;
        
        Engine.draw();
    },
    
    addMine : function()
    {
        if($GM.mine == 0)
        {
            $('div.container.act').append(
                new Button.Button({
                    "id" : "mining",
                    "text" : "채굴",
                    "tooltip" : "<p>광산에서 채굴을 합니다</p>",
                    "align" : "left",
                    "cooldown" : 20000,
                    "click" : function(button)
                    {
                        $GM.money += 10 * $GM.slave;
                        if(Math.random() < 0.1)
                        {
                            $GM.gem += 1;
                        }
                    },
                    "resource" :
                    [
                    ],
                    "notification" : function()
                    {
                        return "채굴을 완료했습니다.";
                    }
                })
            );
        }
        
        if($GM.mine >= $GM.maxMine)
        {
            return;
        }
        
        $GM.mine += 1;
        
        Engine.draw();
    },
    
    addAuction : function()
    {
        if($GM.auction == 0)
        {
             var auction = new Scene.Scene(SceneData["auction"]);
            
            $GM.addScene(auction);
        }
        
        if($GM.auction >= $GM.maxAuction)
        {
            return;
        }
        
        $GM.auction += 1;
        
        Engine.draw();
    },
    
    getMoneyPerSec : function()
    {
        return $GM.slave * ($GM.mine + 1);
    },
    
    getClickMoney : function()
    {
        return 10 + $GM.mine * 5;
    },
    
    frame : 0,
    
    money : 10000,
    slave : 100,
    gem : 0,
    
    colony : 0,
    maxColony : 2,
    mine : 0,
    maxMine : 3,
    prison : 0,
    maxPrison : 1,
    auction : 0,
    maxAuction : 1,
    
    scenes : [],
    
    nowScene : null,
    nowHeader : null,
    
    updateList : []
};

//alias
var $GM = GameManager;