class SummonControlButton extends SidebarItem
{
    displayType = "flex";
    elementType = "sidebar-item";
    imageURL = `url('${CUBE_URL}')`;
    constructor(name, height = "auto", width = "auto", top = "auto", left = "auto")
    {
        super(name, height, width, top, left);
    }

    build()
    {
        super.build();
    }
}
window.customElements.define("summon-control-button-element", SummonControlButton);