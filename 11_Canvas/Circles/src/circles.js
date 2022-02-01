class Ball {
    
    constructor(x, y, radius){
        this.radius = radius;
        this.x = x;
        this.y = y;
        
        this.dx = randomDXY();
        this.dy = randomDXY();

        this.mass = this.radius * this.radius * this.radius;
        this.color = randomColor();
    };    

    draw() {
        ctx.beginPath();
        ctx.arc(Math.round(this.x), Math.round(this.y), this.radius, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.stroke();
        ctx.closePath();
    };

    
    speed() {
        return Math.floor(Math.random() * (5 - 3 ) ) + 3;
    };
    
    angle() {
        return Math.atan2(this.dy, this.dx);
    };

    distance(b) {
        return Math.sqrt((this.x - b.x)**2 + (this.y - b.y)**2);
}
};


function randomColor() {
    let red = Math.floor(Math.random() * (255 + 1));
    let green = Math.floor(Math.random() * (255 + 1));
    let blue = Math.floor(Math.random() * (255 + 1));

    let rc = "rgb(" + red + ", " + green + ", " + blue + ")";
    return rc;
}

function randomRadius() {
        let r = Math.ceil(Math.random() * 10 + 20);
        return r;
}

function randomDXY() {
    let r = Math.floor(Math.random() * 10 - 4);
    return r;
}

