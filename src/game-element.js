class GameElement extends HTMLElement
{
    constructor(height = "auto", width = "auto", top = "auto", left = "auto")
    {
        super();
        this.height = formatValue(height);
        this.width = formatValue(width);
        this.top = formatValue(top);
        this.left = formatValue(left);
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
        if(val instanceof "string")
        {
            return val;
        }
        else if( !(isNaN(val)) )
        {
            return val + "px";
        }
    }
}
window.customElements.define("game-element", GameElement);