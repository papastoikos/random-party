class ControlPanel extends GameElement
{
    displayType = "flex";
    drag = false;
    initialTop;
    initialLeft;
    constructor(top = "auto", left = "auto", height = CONTROL_PANEL_HEIGHT, width = CONTROL_PANEL_WIDTH)
    {
        super(height, width, top, left);
    }

    build()
    {
        super.build();
        this.id = "control-panel";
        this.addCssClass(CONTROL_PANEL_CLASS);
        this.makeDraggable();
    }

    makeDraggable()
    {
        this.addEventListener(
            "mousedown",
            this.startDrag.bind(this)
        );
    }

    startDrag(event)
    {
        console.log(event);
        this.drag = true;
        this.initialTop = parseFloat(this.offsetTop);
        this.initialLeft = parseFloat(this.offsetLeft);
        console.log(`${this.initialTop}`);
        console.log(`${this.initialLeft}`);
    }
}
window.customElements.define("control-panel-element", ControlPanel);

function mouseDown(event)
{
    let drag = true;
}

function mouseMove(event)
{
    if(drag)
    {
        // move along with cursor.
    }
}

function mouseUp()
{
    let drag = false;
}