class SummonControlPanel extends GameElement
{
    displayType = "flex";
    constructor(height = "auto", width = "auto", top = "auto", left = "auto")
    {
        super(height, width, top, left);
    }

    build()
    {
        super.build();
        this.id = "summon-control-panel";
        this.addCssClass(SUMMON_CONTROL_PANEL_CLASS);
    }
}
window.customElements.define("summon-control-panel-element", SummonControlPanel);