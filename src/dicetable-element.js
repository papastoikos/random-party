class Dicetable extends GameElement
{
    displayType = "flex";
    diceArray = [];
    constructor(height = "auto", width = "auto", top = "auto", left = "auto")
    {
        super(height, width, top, left);
    }

    build()
    {
        super.build();
        this.id = "dicetable";
        this.addCssClass(DICETABLE_CLASS);
    }
}
window.customElements.define("dicetable-element", Dicetable);