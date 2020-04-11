$(document).ready(function()
{
    console.log("Ready.");
    $.getScript("src/game-element.js", function()
    {
        console.log("success.");
    });
    let ge = new GameElement();
    $("body").append(ge);
});