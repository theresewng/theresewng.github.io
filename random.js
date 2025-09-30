function roundCent(val) { return Math.floor(val * 100) / 100; } // Round things down with the math function, floor being lowest, divde by 100 to get 2 decimal places

function render() {
  const svg = document.getElementById('random-grid'); // Calling on random-grid id in HTML 
  const side = svg.getAttribute('width'); //Looking to know the width of the canvas created from the SVG (600 x 600)
  const mainHue = [400, 177][Math.floor(Math.random() * 2)]; // Helping to calculate a hue at random
  const hueVariation = 12; //  12 different hues variations
  const cellCountMin = 1; // Minimum cells there can be in the grid 
  const cellCountMax = 15; //Maximum column/rows in canvas
  const cellCount = cellCountMin + Math.floor(Math.random() * (cellCountMax - cellCountMin + 2)); //Creates a random number of cells at random
  const cellSize = side / cellCount; //Canvas' size divided by cells created
  const cellMid = cellSize / 2;
  const frag = document.createDocumentFragment();
  const styles = ['fill', 'stroke'];

  svg.innerHTML = ''; // Clear the canvas for the new ones

  for (let x = 0; x < cellCount; x++) { //Looping to create cells and squares
    for (let y = 0; y < cellCount; y++) {
      const cell = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
      
// Determining the way the square looks (colour, stroke, size, roundness)
      const style = styles[Math.floor(Math.random() * styles.length)];
      const hue = roundCent(mainHue + (Math.floor(Math.random() * hueVariation) - hueVariation / 2));
      const saturation = roundCent(10 + Math.random() * 60);
      const lightness = roundCent(20 + Math.random() * 50);
      const color = `hsl(${hue}deg, ${saturation}%, ${lightness}%)`;
      const strokeWidth = Math.floor(1 + Math.random() * (cellMid / 2 - 1));
      const radiusFactor = (1 + Math.random()) / 2;
      const rotation = Math.floor(Math.random() * 180) - 90;
      let radius = radiusFactor * (cellSize / 2);
      let radiusOffset = cellSize / 2 - radius;
      const corner = Math.floor(Math.random() * radius);

      if (style === 'stroke') { // no fill, make stroke thicker
        radius -= strokeWidth;
        radiusOffset += strokeWidth; //centre it
        cell.setAttribute('fill', 'none');
        cell.setAttribute('stroke', color);
        cell.setAttribute('stroke-width', strokeWidth);
      } else {
        cell.setAttribute('fill', color);
      }

      //Determines x, y, width and height and roundness
      cell.setAttribute('x', x * cellSize + radiusOffset);
      cell.setAttribute('y', y * cellSize + radiusOffset);
      cell.setAttribute('width', radius * 2);
      cell.setAttribute('height', radius * 2);
      cell.setAttribute('rx', corner);

      //places into one of the divided cells
      frag.appendChild(cell);
    }
  }

  svg.appendChild(frag);
}

document.addEventListener('DOMContentLoaded', () => {
  render(); 
  setInterval(render, 2000);   // Change visualisation every 2 seconds

});


// Created with help from: https://codepen.io/chriskirknielsen/pen/rNVGvXr. 