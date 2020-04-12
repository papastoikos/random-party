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
        console.log(($("body").offsetHeight - CONTROL_PANEL_HEIGHT));
        console.log(($("body").offsetHeight));
        console.log(($("body").offsetWidth - CONTROL_PANEL_WIDTH));
        console.log(($("body").offsetWidth));
        this.controlPanel = new ControlPanel(($("body").offsetHeight - CONTROL_PANEL_HEIGHT), ($("body").offsetWidth - CONTROL_PANEL_WIDTH));
        this.controlPanel.build();
        this.appendChild(this.controlPanel);
    }
}
window.customElements.define("screen-element", Screen);