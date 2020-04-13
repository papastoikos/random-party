class SummonControlPanel extends GameElement
{
    displayType = "flex";
    dicetable;
    constructor(height = "auto", width = "auto", top = "auto", left = "auto")
    {
        super(height, width, top, left);
    }

    build()
    {
        super.build();
        this.id = "summon-control-panel";
        this.addCssClass(SUMMON_CONTROL_PANEL_CLASS);
        this.buildDicetable();
    }

    buildDicetable()
    {
        this.dicetable = new Dicetable();
        this.dicetable.build();
        this.appendChild(this.dicetable);
        this.dicetable2 = new Dicetable();
        this.dicetable2.build();
        this.appendChild(this.dicetable2);
        this.dicetable3 = new Dicetable();
        this.dicetable3.build();
        this.appendChild(this.dicetable3);
        this.dicetable4 = new Dicetable();
        this.dicetable4.build();
        this.appendChild(this.dicetable4);
    }
}
window.customElements.define("summon-control-panel-element", SummonControlPanel);