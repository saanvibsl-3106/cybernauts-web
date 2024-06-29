document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll(".container");

    containers.forEach(container => {
        container.addEventListener("mouseover", function() {
            containers.forEach(cont => {
                cont.style.animationPlayState = 'paused';
            });
        });

        container.addEventListener("mouseout", function() {
            containers.forEach(cont => {
                cont.style.animationPlayState = 'running';
            });
        });
    });
});