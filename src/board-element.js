class Board extends GameElement
{
    tileMap = new Map();
    constructor(top = "auto", left = "auto")
    {
        super((BOARD_ROWS * TILE_HEIGHT), (BOARD_COLUMNS * TILE_WIDTH), top, left);
    }

    build()
    {
        super.build();
        this.id = "board";
        $(this).addClass(BOARD_CLASS);
    }
}
window.customElements.define("board-element", Board);