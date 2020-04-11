$(document).ready(function()
{
    loadClassDefinitions();
    let board = new Board();
    // board.build();
    $("body").append(board);
});

function loadClassDefinitions()
{
    $("head").append(getScriptTag("src/game-constants.js"));
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