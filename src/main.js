$(document).ready(function()
{
    let gameElementClass = document.createElement("script");
    gameElementClass.type = "text/javascript";
    gameElementClass.src = "src/game-element.js";
    $("head").append(gameElementClass);
    let ge = new GameElement();
    $("body").append(ge);
});