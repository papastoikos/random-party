class Screen extends GameElement
{
    displayType = "flex";
    board;
    controlPanel;
    constructor(height = "auto", width = "auto", top = "auto", left = "auto")
    {
        super(height, width, top, left);
    }

    build()
    {
        super.build();
        this.id = "screen";
        this.addCssClass(SCREEN_CLASS);
        this.buildBoard();
        this.buildControlPanel();
    }

    buildBoard()
    {
        this.board = new Board();
        this.board.build();
        this.appendChild(this.board);
    }

    buildControlPanel()
    {
        console.log(`window.offsetHeight -> ${window.offsetHeight}`);
        console.log(`window.offsetWidth -> ${window.offsetWidth}`);
        console.log(`document.offsetHeight -> ${document.offsetHeight}`);
        console.log(`document.offsetWidth -> ${document.offsetWidth}`);
        console.log(`document.documentElement.offsetHeight -> ${document.documentElement.offsetHeight}`);
        console.log(`document.documentElement.offsetWidth -> ${document.documentElement.offsetWidth}`);
        this.controlPanel = new ControlPanel(($("body").offsetHeight - CONTROL_PANEL_HEIGHT), ($("body").offsetWidth - CONTROL_PANEL_WIDTH));
        this.controlPanel.build();
        this.appendChild(this.controlPanel);
    }
}
window.customElements.define("screen-element", Screen);