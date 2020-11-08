const percent = document.getElementById("fill");
const loadingBarContainer = document.getElementById("bar");
const button = document.querySelector("button");
const titleScreen = document.querySelector("h1");
const refreshBtn = document.getElementById("refreshBtn");

function load() {
    button.style.display = "none";
    loadingBarContainer.style.display = "block"
    let i = 0;
    percent.style.animationPlayState = "running";
    setInterval(function increasePercent() {
        if (i<=100) {
            percent.innerText = i + "%";
            i++;
        } else {
            loadingBarContainer.style.display = "none";
            titleScreen.style.display = "block";
            refreshBtn.style.display = "block"
        }
    }, 3000/100);
}
