(function () {
    "use strict";
    console.log("reading js");

    const container = document.getElementById('container');
    const image = document.getElementById('main-image');
    const circle = document.getElementById('zoom-circle');

    const zoomLevel = 2.5;
    const circleRadius = 100;

    container.addEventListener('mousemove', function(e) {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            circle.classList.add('active');
            circle.style.left = x - circleRadius + 164 + 'px';
            circle.style.top = y - circleRadius + 115+ 'px';

            const bgX = -(x*zoomLevel - circleRadius);
            const bgY = -(y*zoomLevel - circleRadius);
            const bgWidth = rect.width * zoomLevel;
            const bgHeight = rect.height * zoomLevel;

            circle.style.backgroundImage = `url('${image.src}')`;
            circle.style.backgroundSize = `${bgWidth}px ${bgHeight}px`;
            circle.style.backgroundPosition = `${bgX}px ${bgY}px`;
        }
    });

    container.addEventListener("mouseleave", function(e) {
        circle.classList.remove('active');
    });
})();