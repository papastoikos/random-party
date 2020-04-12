class SidebarItem extends GameElement
{
    displayType = "flex";
    elementType = "sidebar-item";
    imageURL = `url('${CUBE_URL}')`;
    dicetable = new Dicetable();
    constructor(name, height = 50, width = 50, top = "auto", left = "auto")
    {
        super(height, width, top, left);
        this.name = name;
    }

    build()
    {
        super.build();
        this.id = `${this.elementType}-${this.name}`;
        this.addCssClass(SIDEBAR_ITEM_CLASS);
        this.style.backgroundImage = this.imageURL;
        this.style.backgroundSize = "contain";
        this.style.backgroundRepeat = "no-repeat";
        this.style.backgroundPosition = "center center";
        this.addEventListener(
            "click",
            this.toggleDicetable,
            true
        );
    }

    toggleDicetable(event)
    {
        let controlPanel = document.getElementById("control-panel");
        console.log(controlPanel);
        console.log(this.dicetable);
        controlPanel.toggleContent(this.dicetable);
    }
}
window.customElements.define("sidebar-item-element", SidebarItem);