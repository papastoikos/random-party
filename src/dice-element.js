class Dice extends GameElement
{
    displayType = "flex";
    constructor(seqNumber, height = DICE_HEIGHT, width = DICE_WIDTH, top = "auto", left = "auto")
    {
        super(height, width, top, left);
        this.seqNumber = seqNumber;
    }

    build()
    {
        super.build();
        this.id = `dice-${this.seqNumber}`;
        this.addCssClass(DICE_CLASS);
    }
}
window.customElements.define("dice-element", Dice);