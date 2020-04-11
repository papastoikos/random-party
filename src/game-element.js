class GameElement extends HTMLElement
{
    constructor(height = "auto", width = "auto", top = "auto", left = "auto")
    {
        super();
        this.height = this.formatValue(height);
        this.width = this.formatValue(width);
        this.top = this.formatValue(top);
        this.left = this.formatValue(left);
    }

    build()
    {
        this.style.height = this.height;
        this.style.width = this.width;
        this.style.top = this.top;
        this.style.left = this.left;
    }

    formatValue(val)
    {
        if((typeof val === "string") || (val instanceof String))
        {
            return val;
        }
        else if(!(isNaN(val)))
        {
            return val + "px";
        }
    }
}
window.customElements.define("game-element", GameElement);