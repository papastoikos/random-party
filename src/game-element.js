class GameElement extends HTMLElement
{
    constructor()
    {
        super();
    }
}
window.customElements.define("game-element", GameElement);
let ge = new GameElement();
$("body").append(ge);