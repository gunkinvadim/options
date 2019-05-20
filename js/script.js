class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createElement() {
        let body = document.body,
            newDiv = document.createElement('div');

        newDiv.innerHTML = 'Some text';
        body.appendChild(newDiv);
        newDiv.style.cssText = `height: ${this.height}px; \
        width: ${this.width}px; \
        background-color: ${this.bg}; \
        font-size: ${this.fontSize}; \
        text-align: ${this.textAlign}`;
    }
}

const newElement = new Options(120, 240, 'red', 16, 'center').createElement();