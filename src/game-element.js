class GameElement extends HTMLElement
{
    constructor()
    {
        super();
        $("body").css("background", "yellow");
    }
}
window.customElements.define("game-element", GameElement);