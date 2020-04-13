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
        this.buildDice();
    }

    buildDice()
    {
        for(let i = 0; i < NUMBER_OF_DICE; i++)
        {
            let dice = new Dice(i);
            dice.build();
            this.diceArray.push(dice);
            this.appendChild(dice);
        }
    }
}
window.customElements.define("dicetable-element", Dicetable);