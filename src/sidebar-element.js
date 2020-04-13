class Sidebar extends GameElement
{
    displayType = "flex";
    buttonMap = new Map();
    oldSelection = false;
    constructor(height = "100vh", width = "auto", top = 0, left = 0)
    {
        super(height, width, top, left);
    }

    build()
    {
        super.build();
        this.id = "sidebar";
        this.addCssClass(SIDEBAR_CLASS);
        this.buildSummonControlButton();
    }

    buildSummonControlButton()
    {
        let summonControlButton = new SummonControlButton(SUMMON_CONTROL_BUTTON_ID, SUMMON_CONTROL_BUTTON_HEIGHT, SUMMON_CONTROL_BUTTON_WIDTH);
        summonControlButton.build();
        this.buttonMap.set(summonControlButton.id, summonControlButton);
        this.appendChild(summonControlButton);
    }

    highlightSelection(button)
    {
        if(this.oldSelection !== false)
        {
            this.oldSelection.removeCssClass("highlight");
        }
        button.addCssClass("highlight");
    }
}
window.customElements.define("sidebar-element", Sidebar);