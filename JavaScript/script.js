document.getElementById("switch").addEventListener("click", (e) => {
    const svg = document.getElementById("switch");
    const svgColor = window.getComputedStyle(svg).color;

    if (svgColor === "rgb(255, 255, 255)") {
        document.body.style.background = "linear-gradient(to bottom, #ffffff, #d0d0d0)";
        svg.style.color = "#000000";
        document.body.style.color = "#2a2a2a";

    } else {
        document.body.style.background = "linear-gradient(to bottom, #1e1e1e, #424242)";
        svg.style.color = "#ffffff";
        document.body.style.color = "#ffffff";
    }
});
