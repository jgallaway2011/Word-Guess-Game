export var hangmanCanvas;

// Build Out
// Drop him to ground for win with smile

// Variable to hold context and location of canvas
var c = document.querySelector("canvas").getContext('2d');

// Object with methods to draw hangmanCanvas for game
var hangmanCanvas = {
    // Function to draw starting canvas (draws post structure and ground)
    drawStart: function() {
        // Line Thickness
        c.lineWidth = 5;
        c.strokeStyle = "#e2b96e";
        c.beginPath();
        c.moveTo(50, 270);
        // Vertical Left Line of Main Post
        c.lineTo(50, 25);
        // Top Horizontal Line of Overhang Post
        c.lineTo(175, 25);
        // Vertical Right Side Line of Overhang Post
        c.lineTo(175, 40);
        // Horizontal Bottom Right Long Line of Overhang Post
        c.lineTo(106, 40);
        // Horizontal Bottom Left Short Line of Overhang Post
        c.moveTo(86, 40);
        c.lineTo(50, 40);
        // Vertical Right Top Short Line of Main Post
        c.moveTo(65, 40);
        c.lineTo(65, 64);
        // Vertical Right Bottom Long Line of Main Post
        c.moveTo(65, 85);
        c.lineTo(65, 270);
        // Ground Line
        c.moveTo(35, 270);
        c.lineTo(265, 270);
        // Top Diagonal Line of Support Post
        c.moveTo(50, 80);
        c.lineTo(100, 25);
        // Bottom Diagonal Line of Support Post
        c.moveTo(50, 100);
        c.lineTo(119, 25);
        // Draw instructions on canvas
        c.stroke();
        // Draw nail connecting diagonal post to main post
        c.beginPath();
        c.arc(57, 83, 0.5, 0, Math.PI * 2, false);
        c.strokeStyle = "black";
        c.fillStyle = "black";
        c.fill();
        c.stroke();
        // Draw nail connecting diagonal post to overhang post
        c.beginPath();
        c.arc(103, 32, 0.5, 0, Math.PI * 2, false);
        c.fill();
        c.stroke();
        // Reduce line thickness from 5 to 2
        c.lineWidth = 2;
        // Draw Number 8
        c.beginPath();
        c.arc(250, 50, 5, 0, Math.PI * 2, false);
        c.stroke();
        c.beginPath();
        c.arc(250, 60, 5, 0, Math.PI * 2, false);
        c.stroke();
    },
    // Function to draw face
    drawFace: function() {
        // Draw Face Circle
        c.beginPath();
        c.arc(150, 100, 20, 0, Math.PI * 2, false);
        c.stroke();
        // Draw Left Eye Circle
        c.beginPath();
        c.arc(143, 95, 1, 0, Math.PI * 2, false);
        c.stroke();
        // Draw Right Eye Circle
        c.beginPath();
        c.arc(157, 95, 1, 0, Math.PI * 2, false);
        c.stroke();
        // Draw Smile Half Circle
        c.beginPath();
        c.arc(150, 104, 8, 0, Math.PI, false);
        c.stroke();
    },
    // Function to draw body
    drawBody: function() {
        c.beginPath();
        c.moveTo(150, 120);
        c.lineTo(150, 170);
        c.stroke();
    },
    // Function to draw right
    drawRightArm: function() {
        c.beginPath();
        c.moveTo(150, 140);
        c.lineTo(180, 120);
        c.stroke();
    },
    // Function to draw left arm
    drawLeftArm: function() {
        c.beginPath();
        c.moveTo(150, 140);
        c.lineTo(120, 120);
        c.stroke();
    },
    // Function to draw straight line mouth
    drawStraightLineMouth: function() {
        // Clear Current Mouth
        c.clearRect(140, 100, 20, 15);
        // Draw Straight Line Mouth
        c.beginPath();
        c.moveTo(140, 107);
        c.lineTo(160, 107);
        c.stroke();
    },
    // Function to draw right leg
    drawRightLeg: function() {
        c.beginPath();
        c.moveTo(150, 170);
        c.lineTo(180, 190);
        c.stroke();
    },
    // Function to draw left leg
    drawLeftLeg: function() {
        c.beginPath();
        c.moveTo(150, 170);
        c.lineTo(120, 190);
        c.stroke();
    },
    // Function to draw noose
    drawNoose: function() {
        // Increase line thickness from 2 to 5
        c.lineWidth = 5;
        c.beginPath();
        c.moveTo(150, 40);
        c.lineTo(150, 80);
        c.stroke();
    },
    // Function to change face expression
    drawFrownyFace: function() {
        // Reduce line thickness from 5 to 2
        c.lineWidth = 2;
        // Clear current mouth
        c.clearRect(140, 100, 20, 15);
        // Draw frowny half circle
        c.beginPath();
        c.arc(150, 112, 8, 0, Math.PI, true);
        c.stroke();
    },
    // Function to draw cross eyes and drawn down body
    drawDeadFace: function() {
        // Clear current eyes
        c.clearRect(140, 90, 25, 10);
        // Draw right crossed eye
        c.beginPath();
        c.moveTo(147, 98);
        c.lineTo(139, 92);
        c.stroke();
        c.beginPath();
        c.moveTo(139, 98);
        c.lineTo(147, 92);
        c.stroke();
        // Draw Left crossed eye
        c.beginPath();
        c.moveTo(161, 98);
        c.lineTo(153, 92);
        c.stroke();
        c.beginPath();
        c.moveTo(153, 98);
        c.lineTo(161, 92);
        c.stroke();
    },
    // Function to draw lower body, arms, and legs away from head
    drawBodyLower: function() {
        // Clear current body, arms, and legs
        c.clearRect(115, 115, 75, 85)
        // Draw Face Circle
        c.beginPath();
        c.arc(150, 100, 20, 0, Math.PI * 2, false);
        c.stroke();
        // Draw new body lower
        c.beginPath();
        c.moveTo(150, 140);
        c.lineTo(150, 190);
        c.stroke();
        // draw new right arm lower
        c.beginPath();
        c.moveTo(150, 160);
        c.lineTo(180, 140);
        c.stroke();
        // Draw new lett arm lower
        c.beginPath();
        c.moveTo(150, 160);
        c.lineTo(120, 140);
        c.stroke();
        // Draw new right leg lower
        c.beginPath();
        c.moveTo(150, 190);
        c.lineTo(180, 210);
        c.stroke();
        // Draw new left leg lower
        c.beginPath();
        c.moveTo(150, 190);
        c.lineTo(120, 210);
        c.stroke();
    },
    // Draw number 7
    drawSeven: function() {
        // Clear number 8
        this.resetNumber();
        c.beginPath();
        c.moveTo(245, 45);
        c.lineTo(255, 45);
        c.lineTo(245, 65);
        c.stroke();
    },
    // Draw number 6
    drawSix: function() {
        // Clear number 7
        this.resetNumber();
        c.beginPath();
        c.arc(250, 50, 5, 0, Math.PI, true);
        c.lineTo(245, 60);
        c.arc(250, 60, 5, Math.PI, Math.PI * 3, false);
        c.stroke();
    },
    // Draw number 5
    drawFive: function() {
        // Clear number 6
        this.resetNumber();
        c.beginPath();
        c.moveTo(255, 45);
        c.lineTo(245, 45);
        c.lineTo(245, 55);
        c.lineTo(250, 55);
        c.arc(250, 60, 5, Math.PI * 1.5, Math.PI * 0.5, false);
        c.lineTo(245, 65);
        c.stroke();
    },
    // Draw number 4
    drawFour: function() {
        // Clear number 5
        this.resetNumber();
        c.beginPath();
        c.moveTo(245, 45);
        c.lineTo(245, 55);
        c.lineTo(255, 55);
        c.moveTo(255, 45);
        c.lineTo(255, 65);
        c.stroke();
    },
    // Draw number 3
    drawThree: function() {
        // Clear number 4
        this.resetNumber();
        c.beginPath();
        c.moveTo(245, 45);
        c.lineTo(250, 45);
        c.moveTo(247, 55);
        c.lineTo(250, 55);
        c.moveTo(245, 65);
        c.lineTo(250, 65);
        c.stroke();
        c.beginPath();
        c.arc(250, 50, 5, Math.PI * 1.5, Math.PI * 0.5, false);
        c.stroke();
        c.beginPath();
        c.arc(250, 60, 5, Math.PI * 1.5, Math.PI * 0.5, false);
        c.stroke();
    },
    // Draw number 2
    drawTwo: function() {
        // Clear number 3
        this.resetNumber();
        c.beginPath();
        c.arc(250, 50, 5, Math.PI, 0, false);
        c.lineTo(245, 65);
        c.lineTo(255, 65);
        c.stroke();
    },
    // Draw number 1
    drawOne: function() {
        // Clear number 2
        this.resetNumber();
        c.beginPath();
        c.moveTo(245, 50);
        c.lineTo(250, 45);
        c.lineTo(250, 65);
        c.moveTo(245, 65);
        c.lineTo(255, 65);
        c.stroke();
    },
    resetNumber: function() {
        // Clear number
        c.clearRect(240, 40, 20, 30);
    },
    // Function to reset Canvas for new round of game
    resetCanvas: function() {
        c.clearRect(0, 0, 300, 300);
        this.drawStart();
    }
}