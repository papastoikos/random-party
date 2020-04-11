$(document).ready(function()
{
    loadClassDefinitions();
    let board = new Board();
    board.build();
    $("body").append(board);
    $("body").on("mousedown", startDragScroll);
    $("body").on("mouseup", stopDragScroll);
    $("body").on("mousemove", dragScroll);
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

let drag = false;
let initialX;
let initialY;
function startDragScroll(event)
{
    initialX = event.pageX;
    initialY = event.pageY;
    drag = true;
}
function dragScroll(event)
{
    if(drag)
    {
        window.scrollBy(initialX - event.pageX, initialY - event.pageY);
    }
}
function stopDragScroll()
{
    drag = false;
}