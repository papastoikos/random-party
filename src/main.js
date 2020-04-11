$(document).ready(function()
{
    loadClassDefinitions();
    let gameElement = new GameElement();
    let board = new Board();
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