let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let objArray = [];
let lastTime = (new Date()).getTime();
let currentTime = 0;
let dt = 0;


/*canvas.onclick = function keyDownHandler(event) {
    let enabled = true;
    let sizeX = [];
    let sizeY = [];
    
    for (let obj in objArray) {
        obj = objArray[obj];
        sizeX = [obj.x - obj.radius, obj.x + obj.radius];
        sizeY = [obj.y - obj.radius, obj.y + obj.radius];
        console.log(sizeX);
        console.log(event.offsetX);
       
        if ((event.offsetX < sizeX[0] || event.offsetX > sizeX[1])&&(event.offsetY < sizeY[0] || event.offsetY > sizeY[1])) {
            enabled = true;
        }
        else {
            enabled = false; 
        }
    }
    if (enabled) {
        objArray[objArray.length] = new Ball(event.offsetX, event.offsetY, randomRadius());
    }
}*/

canvas.onclick = function keyDownHandler(event) {
    objArray[objArray.length] = new Ball(event.offsetX, event.offsetY, randomRadius());
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function wallCollision(ball) {
    if (ball.x - ball.radius + ball.dx < 0 ||
        ball.x + ball.radius + ball.dx > canvas.width) {
        ball.dx *= -1;
    }
    if (ball.y - ball.radius + ball.dy < 0 ||
        ball.y + ball.radius + ball.dy > canvas.height) {
        ball.dy *= -1;
    }
    if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius;
    }
    if (ball.y - ball.radius < 0) {
        ball.y = ball.radius;
    }
    if (ball.x + ball.radius > canvas.width) {
        ball.x = canvas.width - ball.radius;
    }
    if (ball.x - ball.radius < 0) {
        ball.x = ball.radius;
    }  
}


function ballCollision() {
    for (let i=0; i<objArray.length-1; i++) {
        for (let j=i+1; j<objArray.length; j++) {
            let ob1 = objArray[i]
            let ob2 = objArray[j]
            let dist = ob1.distance(ob2)

            if (dist < ob1.radius + ob2.radius) {              
                let theta1 = ob1.angle();
                let theta2 = ob2.angle();
                let phi = Math.atan2(ob2.y - ob1.y, ob2.x - ob1.x);
                let m1 = ob1.mass;
                let m2 = ob2.mass;
                let v1 = ob1.speed();
                let v2 = ob2.speed();

                let dx1F = (v1 * Math.cos(theta1 - phi) * (m1-m2) + 2*m2*v2*Math.cos(theta2 - phi)) / (m1+m2) * Math.cos(phi) + v1*Math.sin(theta1-phi) * Math.cos(phi+Math.PI/2);
                let dy1F = (v1 * Math.cos(theta1 - phi) * (m1-m2) + 2*m2*v2*Math.cos(theta2 - phi)) / (m1+m2) * Math.sin(phi) + v1*Math.sin(theta1-phi) * Math.sin(phi+Math.PI/2);
                let dx2F = (v2 * Math.cos(theta2 - phi) * (m2-m1) + 2*m1*v1*Math.cos(theta1 - phi)) / (m1+m2) * Math.cos(phi) + v2*Math.sin(theta2-phi) * Math.cos(phi+Math.PI/2);
                let dy2F = (v2 * Math.cos(theta2 - phi) * (m2-m1) + 2*m1*v1*Math.cos(theta1 - phi)) / (m1+m2) * Math.sin(phi) + v2*Math.sin(theta2-phi) * Math.sin(phi+Math.PI/2);

                ob1.dx = dx1F;                
                ob1.dy = dy1F;                
                ob2.dx = dx2F;                
                ob2.dy = dy2F;
          
                staticCollision(ob1, ob2)
                
            }            
        }
        wallCollision(objArray[i]);
    }

    if (objArray.length > 0)
        wallCollision(objArray[objArray.length-1])
}

function staticCollision(ob1, ob2, emergency=false)
{
    let overlap = ob1.radius + ob2.radius - ob1.distance(ob2);
    let smallerObject = ob1.radius < ob2.radius ? ob1 : ob2;
    let biggerObject = ob1.radius > ob2.radius ? ob1 : ob2;

    if (emergency) {
        [smallerObject, biggerObject] = [biggerObject, smallerObject]
    }
    
    let theta = Math.atan2((biggerObject.y - smallerObject.y), (biggerObject.x - smallerObject.x));
    smallerObject.x -= overlap * Math.cos(theta);
    smallerObject.y -= overlap * Math.sin(theta); 

    if (ob1.distance(ob2) < ob1.radius + ob2.radius) {

        if (!emergency) staticCollision(ob1, ob2, true)
    }
}


function moveObjects() {
    for (let i=0; i<objArray.length; i++) {
        let ob = objArray[i];
        ob.x += ob.dx * dt;
        ob.y += ob.dy * dt;
    }    
}


function draw() {
    currentTime = (new Date()).getTime();
    dt = (currentTime - lastTime) / 1000; 
    
    dt *= 50;

    clearCanvas();
    moveObjects();
    ballCollision(); 

    for (let obj in objArray) {
        objArray[obj].draw();
    }
    
    lastTime = currentTime;
    window.requestAnimationFrame(draw);
}


draw();