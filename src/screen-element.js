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
        this.controlPanel = new ControlPanel((document.body.clientHeight - CONTROL_PANEL_HEIGHT), ((document.body.clientWidth - CONTROL_PANEL_WIDTH) / 2));
        this.controlPanel.build();
        this.appendChild(this.controlPanel);
    }
}
window.customElements.define("screen-element", Screen);