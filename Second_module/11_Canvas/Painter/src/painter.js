class Painter {
    constructor(context) {
        this.ctx = context;
    }

    line(x, y) {
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.radius;
        this.ctx.lineCap = 'round';
        if (this.x == undefined || this.y == undefined) {
            this.x = x;
            this.y = y;
        }

        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();

        this.x = x;
        this.y = y;

        return [this.x, this, y];
    }

    start() {
        this.painting = true;
        return this.painting; 
    }

    stop() {
        this.painting = false;
        this.x = undefined;
        this.y = undefined;
        return [this.painting, this.x, this.y]; 
    }
}

module.exports = { Painter }

