class Board extends GameElement
{
    constructor(top = "auto", left = "auto")
    {
        super((BOARD_ROWS * TILE_HEIGHT), (BOARD_COLUMNS * TILE_WIDTH), top, left);
        console.log(BOARD_ROWS);
    }
}
window.customElements.define("board-element", Board);