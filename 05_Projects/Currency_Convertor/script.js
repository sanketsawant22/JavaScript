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
    console.log("clicked");
    
    convert();
} )

function convert() {
    let amount = document.querySelector(".input")
    let value = amount.value;

    if (value == "" || value == "0") {
        amount.value = "1";
        amount = 1;
    }

    let url = 'https://v6.exchangerate-api.com/v6/6072b239d096812cdaf52a59/latest/USD'

}