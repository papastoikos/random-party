class GameElement extends HTMLElement
{
    constructor(height = "auto", width = "auto", top = "auto", left = "auto")
    {
        super();
        this.height = height;
        this.width = width;
        this.top = top;
        this.left = left;
    }

    build()
    {
        this.style.height = this.formatValue(this.height);
        this.style.width = this.formatValue(this.width);
        this.style.top = this.formatValue(this.top);
        this.style.left = this.formatValue(this.left);
    }

    formatValue(val)
    {
        if((typeof val === "string") || (val instanceof String))
        {
            return val;
        }
        else if(!(isNaN(val)))
        {
            console.log(typeof val);
            return val + "vh";
        }
    }
}
window.customElements.define("game-element", GameElement);