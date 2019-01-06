// instance created every time 'zakręć' button is clicked

class Draw {
    constructor() {
        this.options = ['red', 'green', 'blue'];
        let _result = this.drawResult();
        this.getResult = () => _result;
    }
    drawResult() {
        const colors = []
        for (let i = 0; i < this.options.length; i++) {
            colors.push(this.options[Math.floor(Math.random() * 3)]);
        }
        return colors;
    }
}