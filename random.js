function roundCent(val) { return Math.floor(val * 100) / 100; }

function render() {
  const svg = document.getElementById('random-grid'); // select the correct SVG
  const side = svg.getAttribute('width');
  const mainHue = [400, 177][Math.floor(Math.random() * 2)];
  const hueVariation = 12;
  const cellCountMin = 1;
  const cellCountMax = 15;
  const cellCount = cellCountMin + Math.floor(Math.random() * (cellCountMax - cellCountMin + 2));
  const cellSize = side / cellCount;
  const cellMid = cellSize / 2;
  const frag = document.createDocumentFragment();
  const styles = ['fill', 'stroke'];

  svg.innerHTML = ''; // clear previous shapes

  for (let x = 0; x < cellCount; x++) {
    for (let y = 0; y < cellCount; y++) {
      const cell = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
      const style = styles[Math.floor(Math.random() * styles.length)];
      const hue = roundCent(mainHue + (Math.floor(Math.random() * hueVariation) - hueVariation / 2));
      const saturation = roundCent(10 + Math.random() * 80);
      const lightness = roundCent(20 + Math.random() * 60);
      const color = `hsl(${hue}deg, ${saturation}%, ${lightness}%)`;
      const strokeWidth = Math.floor(1 + Math.random() * (cellMid / 2 - 1));
      const radiusFactor = (1 + Math.random()) / 2;
      const rotation = Math.floor(Math.random() * 180) - 90;
      let radius = radiusFactor * (cellSize / 2);
      let radiusOffset = cellSize / 2 - radius;
      const corner = Math.floor(Math.random() * radius);

      if (style === 'stroke') {
        radius -= strokeWidth;
        radiusOffset += strokeWidth;
        cell.setAttribute('fill', 'none');
        cell.setAttribute('stroke', color);
        cell.setAttribute('stroke-width', strokeWidth);
      } else {
        cell.setAttribute('fill', color);
      }

      cell.setAttribute('x', x * cellSize + radiusOffset);
      cell.setAttribute('y', y * cellSize + radiusOffset);
      cell.setAttribute('width', radius * 2);
      cell.setAttribute('height', radius * 2);
      cell.setAttribute('rx', corner);

      frag.appendChild(cell);
    }
  }

  svg.appendChild(frag);
}

// initial render
document.addEventListener('DOMContentLoaded', () => {
  render(); 
  setInterval(render, 2000);   // Change visualisation every 2 seconds

});


// Inspo: https://codepen.io/chriskirknielsen/pen/rNVGvXr but I wanted to play more with the colour and shape ranges and added comments to understand what was happening (with some help from ChatGPT - Prompt: ELI5 the code)