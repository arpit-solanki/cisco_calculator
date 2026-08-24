let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

// add a click event to all the buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let value = buttons[i].innerText;

        if (value == "C") {
            display.value = "";
        } else if (value == "=") {
            try {
                display.value = eval(display.value);
            } catch (err) {
                display.value = "Error";
            }
        } else {
            if (display.value == "Error") {
                display.value = "";
            }
            display.value = display.value + value;
        }
    });
}
