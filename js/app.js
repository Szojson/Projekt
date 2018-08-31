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

    submenu();

    // white_stripes

    function whiteStripes() {
        const box1 = document.querySelector(".box1");
        const box1WhiteStripe = document.querySelector(".box1 .white_stripe");
        const box2 = document.querySelector(".box2");
        const box2WhiteStripe = document.querySelector(".box2 .white_stripe");
        box3 = document.querySelector(".box3");
        box3WhiteStripe = document.querySelector(".box3 .white_stripe");


        box1.addEventListener("mouseover", event => {
            box1WhiteStripe.style.display = "none";
        });
        box1.addEventListener("mouseout", event => {
            box1WhiteStripe.style.display = "block";
        });

        box2.addEventListener("mouseover", event => {
            box2WhiteStripe.style.display = "none";
        });
        box2.addEventListener("mouseout", event => {
            box2WhiteStripe.style.display = "block";
        });

        box3.addEventListener("mouseover", event => {
            box3WhiteStripe.style.display = "none";
        });
        box3.addEventListener("mouseout", event => {
            box3WhiteStripe.style.display = "block";
        });
    }

    whiteStripes();

    //slider

    function slider() {
        const previousArrow = document.querySelector(".arrow_left");
        const nextArrow = document.querySelector(".arrow_right");
        const listElements = document.querySelectorAll(".header_left li");
        let visiblePictureIndex = 0;

        listElements[visiblePictureIndex].classList.add("visible");

        const nextArrowFunction = event => {
            listElements[visiblePictureIndex].classList.remove("visible");
            visiblePictureIndex++;

            if (visiblePictureIndex > listElements.length - 1) {
                visiblePictureIndex = [0];
            }
            listElements[visiblePictureIndex].classList.add("visible");
        };
        previousArrow.addEventListener("click", event => {
            listElements[visiblePictureIndex].classList.remove("visible");
            visiblePictureIndex--;

            if (visiblePictureIndex < 0) {
                visiblePictureIndex = listElements.length - 1;
            }
            listElements[visiblePictureIndex].classList.add("visible");
        });

        nextArrow.addEventListener("click", nextArrowFunction);
        setInterval(nextArrowFunction, 2000);
    }

    slider();

});