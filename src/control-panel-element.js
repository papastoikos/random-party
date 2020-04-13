class ControlPanel extends GameElement
{
    displayType = "flex";
    titleBar;
    drag = false;
    initialTop;
    initialLeft;
    pointerDX;
    pointerDY;
    constructor(top = 0, left = 100, height = CONTROL_PANEL_TITLE_BAR_HEIGHT, width = CONTROL_PANEL_WIDTH)
    {
        super(height, width, top, left);
    }

    build()
    {
        super.build();
        this.id = "control-panel";
        this.addCssClass(CONTROL_PANEL_CLASS);
        this.buildTitleBar();
        this.makeDraggable();
    }

    buildTitleBar()
    {
        this.titleBar = new GameElement();
        this.titleBar.build();
        this.titleBar.style.backgroundColor = "gainsboro";
        this.titleBar.style.lineHeight = this.formatValue(CONTROL_PANEL_TITLE_BAR_HEIGHT);
        this.titleBar.addCssClass("control-panel-title");
        this.titleBar.innerHTML = "Control Panel";
        this.appendChild(this.titleBar);
    }

    setContent(content)
    {
        this.clear();
        this.style.height = this.formatValue(CONTROL_PANEL_HEIGHT);
        this.appendChild(content);
    }

    toggleContent(content)
    {
        if(content === this.childNodes[1])
        {
            this.clear();
            return false;
        }
        else
        {
            this.setContent(content);
            return true;
        }
    }

    clear()
    {
        while(this.childNodes.length > 1)
        {
            this.style.height = this.formatValue(CONTROL_PANEL_TITLE_BAR_HEIGHT);
            this.removeChild(this.lastChild);
        }
    }

    makeDraggable()
    {
        this.titleBar.addEventListener(
            "mousedown",
            this.startDrag.bind(this),
            true
        );
    }

    startDrag(event)
    {
        event.preventDefault();
        if(event.target.parentNode.id !== this.id)
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
        event.stopPropagation();
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