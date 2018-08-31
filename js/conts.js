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

    //form validation

    const form = document.getElementsByTagName("form")[1];
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageText = document.getElementById("message");
    const checkboxForm = document.getElementById("checkbox_form");


    function formValidation() {

        form.addEventListener("submit", event => {
            const email = emailInput.value;
            const Name = nameInput.value;
            const message = messageText.value;

            if (!email.includes("@")) {
                alert("Podany adres jest nieprawidłowy.");
                event.preventDefault();
            }
            if (Name.length < 4) {
                alert("Proszę wpisać swoję imię i nazwisko.");
                event.preventDefault();
            }
            if (message.length < 10) {
                alert("Proszę wpisać wiadomość.");
                event.preventDefault();
            }
            if (checkboxForm.checked === false) {
                alert("Proszę zaznaczyć zgodę na przetwarzanie danych.");
                event.preventDefault();
            }
        });
    }
    formValidation();
});
