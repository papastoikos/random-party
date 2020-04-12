class Sidebar extends GameElement
{
    displayType = "flex";
    buttonMap = new Map();
    constructor(height = "auto", width = "auto", top = "auto", left = "auto")
    {
        super(height, width, top, left);
    }

    build()
    {
        super.build();
        this.id = "sidebar";
        this.addCssClass(SIDEBAR_CLASS);
        this.buildDicetableButton();
    }

    buildDicetableButton()
    {
        let dicetableButton = new SidebarItem("dicetable-button");
        dicetableButton.build();
        this.buttonMap.set(dicetableButton.id, dicetableButton);
        this.appendChild(dicetableButton);
    }
}
window.customElements.define("sidebar-element", Sidebar);