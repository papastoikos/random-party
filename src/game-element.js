class GameElement extends HTMLElement
{
    displayType = "block";
    drag = false;
    initialTop;
    initialLeft;
    pointerDX;
    pointerDY;
    constructor(height = "auto", width = "auto", top = "auto", left = "auto")
    {
        super();
        this.height = height;
        this.width = width;
        this.top = top;
        this.left = left;
    }

    build()
    {
        this.style.height = this.formatValue(this.height);
        this.style.width = this.formatValue(this.width);
        this.style.top = this.formatValue(this.top);
        this.style.left = this.formatValue(this.left);
        this.style.display = this.displayType;
        this.makeDraggable();
    }

    formatValue(val)
    {
        if((typeof val === "string") || (val instanceof String))
        {
            return val;
        }
        else if(!(isNaN(val)))
        {
            return `${val}px`;
        }
    }

    addCssClass(cssClass)
    {
        if(this.hasCssClass(cssClass))
        {
            return false;
        }
        this.classList.add(cssClass);
        return true;
    }

    removeCssClass(cssClass)
    {
        if(this.hasCssClass(cssClass))
        {
            this.classList.remove(cssClass);
            return true;
        }
        return false;
    }

    hasCssClass(cssClass)
    {
        if(this.classList.contains(cssClass))
        {
            return true;
        }
        return false;
    }

    hideEl()
    {
        if(this.style.display === this.displayType)
        {
            this.style.display = "none";
        }
    }

    showEl()
    {
        if(this.style.display !== this.displayType)
        {
            this.style.display = this.displayType;
        }
    }

    toggleEl()
    {
        if(this.style.display === this.displayType)
        {
            this.style.display = "none";
        }
        else
        {
            this.style.display = this.displayType;
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
window.customElements.define("game-element", GameElement);