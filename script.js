
// Initialising and declaring start from here..........
const rand =
{
    x: Math.floor(Math.random() * 800),
    y: Math.floor(Math.random() * 400),
    color:Math.floor(Math.random() * 999)
}

const balls =
{
    x: [],
    y: [],
    radius: [],
    color: [],
    xspeed: [],
    yspeed: [],
    timeframe: 20,   
    quantity: 20       
}



const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width=window.innerWidth
canvas.height=window.innerHeight/2


// initialising all parameters of balls array
function ballsinit()
{
for (let i = 0; i < balls.quantity; i++) 
{
    balls.x[i] = 40
    balls.y[i] = 50
    balls.radius[i] = 1 * (i + 10)
    balls.color[i] = "#" + Math.random().toString(16).slice(2, 8)   // generates variable hex value for different colors
    console.log(`The color values : ${balls.color} `)
    balls.xspeed[i] = 1 + i * 0.2           // multiplier 0.2  for reducing ball speeds
    balls.yspeed[i] = 2 + i * 0.2           // multiplier 0.2  for reducing ball speeds
}
}

// drawing cicle function
function drawcircle() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // clears the canvas area to create animation effect 
    for (let i = 0; i < balls.quantity; i++) {
        ctx.beginPath();
        ctx.arc(balls.x[i], balls.y[i], balls.radius[i], 0, 2 * Math.PI);
        ctx.fillStyle = balls.color[i]; // gives color to balls
        ctx.fill();
    }

}

// initialising and declaring ends here...................

// program starts from here............

ballsinit()
setInterval(() => {
// updates x,y position of balls
    for (let i = 0; i < balls.quantity; i++) 
    {

        if (balls.x[i] >= (canvas.width - balls.radius[i])) {
            balls.xspeed[i] = -1 * (balls.xspeed[i])
        }
        else if (balls.x[i] <= balls.radius[i]) {
            balls.xspeed[i] = -1 * (balls.xspeed[i])
        }

        if (balls.y[i] >= (canvas.height - balls.radius[i])) {
            balls.yspeed[i] = -1 * (balls.yspeed[i])
        }
        else if (balls.y[i] <= balls.radius[i]) {
            balls.yspeed[i] = -1 * (balls.yspeed[i])
        }
        balls.x[i] += balls.xspeed[i]
        balls.y[i] += balls.yspeed[i]

    }

    drawcircle();
}, balls.timeframe)


