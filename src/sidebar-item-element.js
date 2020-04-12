class SidebarItem extends GameElement
{
    displayType = "flex";
    elementType = "sidebar-item";
    imageURL = "url('" + CUBE_URL + "')";
    constructor(name, height = "auto", width = "auto", top = "auto", left = "auto")
    {
        super(height, width, top, left);
        this.name = name;
    }

    build()
    {
        super.build();
        this.id = this.elementType + "-" + this.name;
        this.addCssClass(SIDEBAR_ITEM_CLASS);
        this.style.backgroundImage = this.imageURL;
        this.style.backgroundSize = "contain";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center center";
    }
}
window.customElements.define("sidebar-item-element", SidebarItem);