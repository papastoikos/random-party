class Screen extends GameElement
{
    displayType = "flex";
    board;
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
    }

    buildBoard()
    {
        this.board = new Board();
        this.board.build();
        this.appendChild(this.board);
    }
}
window.customElements.define("screen-element", Screen);