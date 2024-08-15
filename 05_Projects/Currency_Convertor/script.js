const list = document.querySelectorAll(".list select")

const btn = document.querySelector("form .btn")



for (let i = 0; i < list.length; i++) {
    for(currencyCode in countryCode) {

        let selected;
        if (i == 0) {
            selected = currencyCode == "USD" ? "selected" : "";
        }

        else if (i == 1) {
            selected = currencyCode == "INR" ? "selected" : "";
        }

        // console.log(currencyCode);
        let optiontag = `<option value="${currencyCode}" ${selected}>${currencyCode}</option>`
        list[i].insertAdjacentHTML("beforeend", optiontag)
    }
}

btn.addEventListener("click", function(e) {
    e.preventDefault();
    convert();
} )

function convert() {
    
}