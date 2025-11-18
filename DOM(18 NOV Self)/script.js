let btn = document.querySelector(".install-btn");
let bar = document.querySelector(".progress-inner");
let percent = document.querySelector(".percent");
let statusText = document.querySelector(".status-text");

btn.addEventListener("click", () => {
    btn.style.pointerEvents = "none";
    btn.innerHTML = "Installing…";

    let progress = 0;

    let installing = setInterval(() => {
        progress++;

        bar.style.width = progress + "%";
        percent.innerHTML = progress + "%";

        if (progress < 30) {
            statusText.innerHTML = "Preparing files…";
        } 
        else if (progress < 80) {
            statusText.innerHTML = "Installing components…";
        } 
        else {
            statusText.innerHTML = "Finishing up…";
        }

        if (progress >= 100) {
            clearInterval(installing);

            statusText.innerHTML = "Installation complete ✔";
            bar.style.background = "#2ecc71";
            bar.style.boxShadow = "0 0 10px #2ecc71";

            btn.innerHTML = "Done";
            btn.style.opacity = "0.6";
        }
    }, 60);
});
