class GameElement extends HTMLElement
{
    displayType = "block";
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

    toggleHighlight()
    {
        if(this.removeCssClass(HIGHLIGHT_CLASS))
        {
            return;
        }
        this.addCssClass(HIGHLIGHT_CLASS);
    }
}
window.customElements.define("game-element", GameElement);