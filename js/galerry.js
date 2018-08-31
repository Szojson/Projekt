document.addEventListener("DOMContentLoaded", () => {

    //submenu

    function submenu() {
        const listElements = document.querySelector(".submenu ul li:nth-child(4)");
        const subList = document.querySelector(".submenu ul li ul");
        listElements.addEventListener("mouseover", event => {
            if (subList != null) {
                subList.style.display = "block";
            }
        });
        listElements.addEventListener("mouseout", event => {
            subList.style.display = "none";
        });
    }
