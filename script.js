let p1 = document.getElementById("p1");

let p2 = document.getElementById("p2");

let p3 = document.getElementById("p3");

let bottone1 = document.getElementById("bottone1");

let bottone2 = document.getElementById("bottone2");

let bottone3 = document.getElementById("bottone3");

bottone1.addEventListener("click", function () {

    let r = Math.floor(Math.random() * 256);

    let g = Math.floor(Math.random() * 256);

    let b = Math.floor(Math.random() * 256);

    p1.style.color = "rgb(" + r + ", " + g + ", " + b + ")";

    r = Math.floor(Math.random() * 256);

    g = Math.floor(Math.random() * 256);

    b = Math.floor(Math.random() * 256);

    p2.style.color = "rgb(" + r + ", " + g + ", " + b + ")";

    r = Math.floor(Math.random() * 256);

    g = Math.floor(Math.random() * 256);

    b = Math.floor(Math.random() * 256);

    p3.style.color = "rgb(" + r + ", " + g + ", " + b + ")";
});

bottone2.addEventListener("click", function () {

    p1.style.fontWeight = "bold";

    p2.style.fontWeight = "bold";

    p3.style.fontWeight = "bold";
});

bottone3.addEventListener("click", function () {

    if (p1.style.display === "none") {

        p1.style.display = "block";

        p2.style.display = "block";

        p3.style.display = "block";

    } else {

        p1.style.display = "none";

        p2.style.display = "none";

        p3.style.display = "none";
        
    }
});