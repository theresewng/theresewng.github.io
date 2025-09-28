console.log("vis.js is running");

document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll('.bar');
    const tooltipBox = document.getElementById('tooltip-box');

    bars.forEach(bar => {
        bar.addEventListener('mouseenter', () => {
            const label = bar.getAttribute('data-label') || '';
            tooltipBox.textContent = label;  // update the side box
        });

        bar.addEventListener('mouseleave', () => {
            tooltipBox.textContent = "Hover over a bar"; // reset text
        });
    });
});

