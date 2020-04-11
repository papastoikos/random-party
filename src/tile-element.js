class Tile extends GameElement
{
    displayType = "block";
    elementType = "tile";
    constructor(y, x, height = TILE_HEIGHT, width = TILE_WIDTH)
    {
        super(height, width, (y * height), (x * width));
        // y and x are coordinates on the board ranging from 0 to BOARD_ROWS or BOARD_COLUMNS.
        this.y = y;
        this.x = x;
    }

    build()
    {
        super.build();
        this.id = this.elementType + "-" + "y" + this.y + "x" + this.x;
        $(this).addClass(TILE_CLASS);
    }
}
window.customElements.define("tile-element", Tile);