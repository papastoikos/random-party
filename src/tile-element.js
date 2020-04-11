class Tile extends GameElement
{
    constructor(ownerId, y, x, top = "auto", left = "auto")
    {
        super(TILE_HEIGHT, BOARD_COLUMNS, top, left);
        // y and x and coordinates on the board.
        this.ownerId = ownerId;
        this.y = y;
        this.x = x;
    }
}
window.customElements.define("tile-element", Tile);