class Sidebar extends GameElement
{
    displayType = "flex";
    constructor(height = "auto", width = "auto", top = "auto", left = "auto")
    {
        super(height, width, top, left);
    }

    build()
    {
        super.build();
        this.id = "sidebar";
        this.addCssClass(SIDEBAR_CLASS);
    }
}
window.customElements.define("sidebar-element", Sidebar);