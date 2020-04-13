$(document).ready(function()
{
    init();
    let sidebar = new Sidebar();
    sidebar.build();
    let screen = new Screen();
    screen.build();
    $("body").append(sidebar);
    $("body").append(screen);
});

function init()
{
    loadClassDefinitions();
    $("body").on("mousedown", startDragScroll);
    $("body").on("mouseup", stopDragScroll);
    $("body").on("mousemove", dragScroll);
}

function loadClassDefinitions()
{
    $("head").append(getScriptTag("src/game-constants.js"));
    $("head").append(getScriptTag("src/game-element.js"));
    $("head").append(getScriptTag("src/tile-element.js"));
    $("head").append(getScriptTag("src/board-element.js"));
    $("head").append(getScriptTag("src/control-panel-element.js"));
    $("head").append(getScriptTag("src/dice-element.js"));
    $("head").append(getScriptTag("src/dicetable-element.js"));
    $("head").append(getScriptTag("src/sidebar-item-element.js"));
    $("head").append(getScriptTag("src/sidebar-element.js"));
    $("head").append(getScriptTag("src/screen-element.js"));
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