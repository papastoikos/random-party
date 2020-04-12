class ControlPanel extends GameElement
{
    displayType = "flex";
    constructor(top = "auto", left = "auto", height = CONTROL_PANEL_HEIGHT, width = CONTROL_PANEL_WIDTH)
    {
        super(height, width, top, left);
    }

    build()
    {
        super.build();
        this.id = "control-panel";
        this.addCssClass(CONTROL_PANEL_CLASS);
    }
}
window.customElements.define("control-panel-element", ControlPanel);