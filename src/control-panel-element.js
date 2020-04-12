class ControlPanel extends GameElement
{
    displayType = "flex";
    drag = false;
    initialTop;
    initialLeft;
    pointerDX;
    pointerDY;
    constructor(top = "auto", left = "auto", height = 0, width = CONTROL_PANEL_WIDTH)
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

    setContent(content)
    {
        this.clear();
        this.appendChild(content);
    }

    toggleContent(content)
    {
        if(content === this.firstChild)
        {
            $(this).animate({height: "0px"}, 1000);
            this.clear();
            return false;
        }
        else
        {
            this.setContent(content);
            $(this).animate({height: CONTROL_PANEL_HEIGHT}, 1000);
            this.showEl();
            return true;
        }
    }

    clear()
    {
        if(this.childNodes.length > 0)
        {
            while(this.firstChild)
            {
                this.removeChild(this.lastChild);
            }
        }
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
        if(event.target.id !== this.id)
        {
            return;
        }
        this.drag = true;
        this.initialTop = parseFloat(this.offsetTop);
        this.pointerDY = event.clientY - this.initialTop;
        this.initialLeft = parseFloat(this.offsetLeft);
        this.pointerDX = event.clientX - this.initialLeft;
        this.addEventListener(
            "mouseup",
            this.stopDrag.bind(this),
            true
        );
        this.addEventListener(
            "mouseleave",
            this.stopDrag.bind(this),
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
            this.style.top = this.formatValue((event.clientY - this.pointerDY));
            this.style.left = this.formatValue((event.clientX - this.pointerDX));
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
            "mouseleave",
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