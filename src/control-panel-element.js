class ControlPanel extends GameElement
{
    displayType = "flex";
    drag = false;
    initialTop;
    initialLeft;
    pointerDX;
    pointerDY;
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
            this.startDrag.bind(this),
            true
        );
    }

    startDrag(event)
    {
        event.preventDefault();
        event.stopPropagation();
        this.drag = true;
        this.initialTop = parseFloat(this.offsetTop);
        this.pointerDY = event.clientY - this.initialTop;
        this.initialLeft = parseFloat(this.offsetLeft);
        this.pointerDX = event.clientX - this.initialLeft;
        this.addEventListener(
            "mouseup",
            true
        );
        this.addEventListener(
            "mousemove",
            this.dragMove.bind(this),
            true
        );
    }

    dragMove(event)
    {
        event.preventDefault();
        event.stopPropagation();
        if(this.drag)
        {
            console.log(`element-x: ${event.clientX - this.pointerDX}, element-y: ${event.clientY - this.pointerDY}`);
            console.log(`cursor-x: ${event.clientX}, cursor-y: ${event.clientY}`);
        }
    }
    
    stopDrag(event)
    {
        event.preventDefault();
        event.stopPropagation();
        this.drag = false;
        this.removeEventListener(
            "mouseup",
            this.stopDrag,
            true
        );
        this.removeEventListener(
            "mousemove",
            this.dragMove,
            true
        );
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