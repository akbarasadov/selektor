let headers = document.querySelectorAll(".head");
let buttons = document.querySelectorAll(".button");

headers.forEach(header => {

    header.onclick = () => {
        headers.forEach(active => {
            active.classList.remove("open");
        });
        header.classList.add("open");

        let buttons=document.querySelectorAll(".button")
        buttons.forEach(button => {
            button.innerHTML = "+";
            button.classList.remove("close");
        });

        let button = header.querySelector(".button");
        button.innerHTML = "x";

        
        button.onclick = () => {
            button.classList.add("close");
            button.innerHTML = "+";
        };
    }
});