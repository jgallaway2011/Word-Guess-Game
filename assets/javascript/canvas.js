var c = document.querySelector("canvas").getContext('2d');
// Line Thickness
c.lineWidth = 5;
// Vertical Left Line of Main Post
c.beginPath();
c.moveTo(50, 270);
c.lineTo(50, 25);
c.stroke();
// Vertical Right Bottom Long Line of Main Post
c.beginPath();
c.moveTo(65, 270);
c.lineTo(65, 85);
c.stroke();
// Vertical Right Top Short Line of Main Post
c.beginPath();
c.moveTo(65, 64);
c.lineTo(65, 40);
c.stroke();
// Top Horizontal Line of Overhang Post
c.beginPath();
c.moveTo(48, 25);
c.lineTo(175, 25);
c.stroke();
// Horizontal Bottom Left Short Line of Overhang Post
c.beginPath();
c.moveTo(50, 40);
c.lineTo(86, 40);
c.stroke();
// Horizontal Bottom Right Long Line of Overhang Post
c.beginPath();  
c.moveTo(106, 40);
c.lineTo(175, 40);
c.stroke();
// Vertical Right Side Line of Overhang Post
c.beginPath();
c.moveTo(173, 25);
c.lineTo(173, 40);
c.stroke();
// Top Diagonal Line of Support Post
c.beginPath();
c.moveTo(50, 80);
c.lineTo(100, 25);
c.stroke();
// Bottom Diagonal Line of Support Post
c.beginPath();
c.moveTo(50, 100);
c.lineTo(119, 25);
c.stroke();
// Ground Line
c.beginPath();
c.moveTo(35, 270);
c.lineTo(265, 270);
c.stroke();
// Noose Line
c.beginPath();
c.moveTo(150, 40);
c.lineTo(150, 80);
c.stroke();