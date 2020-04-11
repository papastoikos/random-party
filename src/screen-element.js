class Screen extends GameElement
{
    displayType = "flex";
    constructor(height = "auto", width = "auto", top = "auto", left = "auto")
    {
        super(height, width, top, left);
    }

    build()
    {
        super.build();
        this.id = "screen";
        this.addCssClass(SCREEN_CLASS);
    }
}
window.customElements.define("screen-element", Screen);