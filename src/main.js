// GAME VALUES
const BOARD_ROWS = 7;
const BOARD_COLUMNS = 7;
const TILE_HEIGHT = 50;
const TILE_WIDTH = 50;

$(document).ready(function()
{
    loadClassDefinitions();
    let board = new Board(BOARD_ROWS, BOARD_COLUMNS, TILE_HEIGHT, TILE_WIDTH);
    board.build();
    $("body").append(gameElement);
    $("body").append(board);
});

function loadClassDefinitions()
{
    $("head").append(getScriptTag("src/game-element.js"));
    $("head").append(getScriptTag("src/board-element.js"));
}

function getScriptTag(src)
{
    let elementClass;
    elementClass = document.createElement("script");
    elementClass.type = "text/javascript";
    elementClass.src = src;
    return elementClass;
}