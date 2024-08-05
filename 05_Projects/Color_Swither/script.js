const buttons = document.querySelectorAll(".button")

const body = document.querySelector("body")

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log(e.target);

        if (e.target.id != body.style.backgroundColor) {
            body.style.backgroundColor = e.target.id
        }

        // if (e.target.id === "grey") {
        //     body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id === "maroon") {
        //     body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id === "orange") {
        //     body.style.backgroundColor = e.target.id
        // }
        // if (e.target.id === "lavender") {
        //     body.style.backgroundColor = e.target.id
        // }

    } );
} );