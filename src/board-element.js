class Board extends GameElement
{
    displayType = "block";
    tileMap = new Map();
    constructor(height = (BOARD_ROWS * TILE_HEIGHT), width = (BOARD_COLUMNS * TILE_WIDTH), top = "auto", left = "auto")
    {
        super(height, width, top, left);
    }

    build()
    {
        super.build();
        this.id = "board";
        $(this).addClass(BOARD_CLASS);
        this.buildTiles();
    }

    buildTiles()
    {
        for(let y = 0; y < BOARD_ROWS; y++)
        {
            for(let x = 0; x < BOARD_COLUMNS; x++)
            {
                let tile = new Tile(y, x);
                tile.build();
                if(isEven(x + y))
                {
                    tile.addClass(TILE_TYPE_ONE_CLASS);
                }
                else
                {
                    tile.addClass(TILE_TYPE_TWO_CLASS);
                }
                this.tileMap.set(tile.id, tile);
                this.appendChild(tile);
            }
        }
    }
}
window.customElements.define("board-element", Board);

function isEven(val)
{
    if(Number.isInteger(val))
    {
        return ((val % 2) === 0);
    }
    return false;
}