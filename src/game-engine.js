class GameEngine
{
    playerOne;
    playerTwo;
    sidebar;
    screen;
    constructor()
    {
        this.init();
    }

    init()
    {
        this.playerOne = new Player("player-one");
        this.playerTwo = new Player("player-two");
        this.buildAssets();
        this.addEventListeners();
    }

    buildAssets()
    {
        this.sidebar = new Sidebar();
        this.sidebar.build();
        this.screen = new Screen();
        this.screen.build();
        document.body.appendChild(this.sidebar);
        document.body.appendChild(this.screen);
    }

    addEventListeners()
    {
        this.sidebar.buttonMap.get(SUMMON_CONTROL_BUTTON_ID).addEventListener(
            "click",
            this.toggleSummonInterface.bind(this),
            true
        );
    }

    toggleSummonInterface(event)
    {
        if(event.target instanceof SidebarItem)
        {
            this.sidebar.highlightSelection(event.target);
            this.screen.controlPanel.toggleContent(this.playerOne.summonControlPanel);
        }
    }
}