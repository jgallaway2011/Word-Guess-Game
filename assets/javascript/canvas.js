export var hangmanCanvas;

// Variable to hold context and location of canvas
var c = document.querySelector("canvas").getContext('2d');

// Object with methods to draw hangmanCanvas for game
var hangmanCanvas = {
    // Function to draw starting canvas (draws post structure and ground)
    drawStart: function() {
        // Line Thickness
        c.lineWidth = 5;
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
    },
    // Function to draw face
    drawFace: function() {
        // Reduce line thickness from 5 to 2
        c.lineWidth = 2;
        // Face Circle
        c.beginPath();
        c.arc(150, 100, 20, 0, Math.PI * 2, false);
        c.stroke();
        // Left Eye Circle
        c.beginPath();
        c.arc(143, 95, 1, 0, Math.PI * 2, false);
        c.stroke();
        // Right Eye Circle
        c.beginPath();
        c.arc(157, 95, 1, 0, Math.PI * 2, false);
        c.stroke();
        // Mouth Line
        c.beginPath();
        c.moveTo(140, 107);
        c.lineTo(160, 107);
        c.stroke();
    },
    // Function to draw body
    drawBody: function() {
        c.beginPath();
        c.moveTo(150, 120);
        c.lineTo(150, 170);
        c.stroke();
    },
    // Function to draw right arm
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
    // Function to reset Canvas for new round of game
    resetCanvas: function() {
        c.clearRect(0, 0, 300, 300);
        this.drawStart();
    }
}

