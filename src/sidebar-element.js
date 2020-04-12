class Sidebar extends GameElement
{
    displayType = "flex";
    buttonMap = new Map();
    constructor(height = "100vh", width = "auto", top = 0, left = 0)
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