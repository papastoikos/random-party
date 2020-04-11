class Board extends GameElement
{
    constructor(rows, columns, tileHeight, tileWidth, top = "auto", left = "auto")
    {
        super(top, left, (rows * tileHeight), (columns * tileWidth));
        this.rows = rows;
        this.columns = columns;
        this.tileHeight = this.formatValue(tileHeight);
        this.tileWidth = this.formatValue(tileWidth);
    }
}
window.customElements.define("board-element", Board);