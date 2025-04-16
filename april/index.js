document.addEventListener("DOMContentLoaded", function () {
    const hesloInput = document.getElementById("heslo");
    const hesloError = document.getElementById("heslo-error");

    hesloInput.addEventListener("input", function () {
        const heslo = hesloInput.value;
        const chyby = [];

        if (heslo.search(/[A-Z]/) === -1) {
            chyby.push("Chybí velké písmeno");
        }
        if (heslo.search(/[a-z]/) === -1) {
            chyby.push("Chybí malé písmeno");
        }
        if (heslo.search(/[0-9]/) === -1) {
            chyby.push("Chybí číslo");
        }
        if (heslo.search(/[^A-Za-z0-9]/) === -1) {
            chyby.push("Chybí speciální znak");
        }

        hesloError.innerText = chyby.length > 0 ? chyby.join("\n") : "";
    });
});



