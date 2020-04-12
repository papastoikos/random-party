class Dice extends GameElement
{
    displayType = "flex";
    diceArray = [];
    constructor(height = DICE_HEIGHT, width = DICE_WIDTH, top = "auto", left = "auto")
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
window.customElements.define("dice-element", Dice);