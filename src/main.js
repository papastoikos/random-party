$(document).ready(function()
{
    console.log("Ready.");
    $.getScript("game-element.js", function()
    {
        console.log("success.");
    });
});