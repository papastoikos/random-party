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
}