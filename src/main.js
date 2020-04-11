$(document).ready(function()
{
    loadClassDefinitions();
    let board = new Board();
    board.build();
    $("body").append(board);
    $("body").click(dragScroll);
});

function loadClassDefinitions()
{
    $("head").append(getScriptTag("src/game-constants.js"));
    $("head").append(getScriptTag("src/game-element.js"));
    $("head").append(getScriptTag("src/board-element.js"));
    $("head").append(getScriptTag("src/tile-element.js"));
}

function getScriptTag(src)
{
    let elementClass;
    elementClass = document.createElement("script");
    elementClass.type = "text/javascript";
    elementClass.src = src;
    return elementClass;
}

function dragScroll(event)
{
    console.log("X: " + event.pageX + " Y: " + event.pageY);
}