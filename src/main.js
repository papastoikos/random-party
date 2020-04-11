$(document).ready(function()
{
    console.log("Ready.");
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "src/game-element.js";
    $("head").append(s);
    let ge = new GameElement();
    $("body").append(ge);
});