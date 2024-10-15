import { fnGetElementById, fnShow, fnHide, fnAddClass } from "./common";

export function __Alert(status, message) {
    let bg = status ? "success" : "error";
    let alertDiv = fnGetElementById("_alert");
    let alertMessage = fnGetElementById("alertMessage");
    alertMessage.textContent =message
    fnAddClass(alertDiv,bg)
    fnShow(alertDiv);
    // alertDiv.fadeIn();
    setAutoHide(alertDiv);
    // alertDiv.addClass(bg);
    // alertDiv.find("p").text(message);
    // alertDiv.show();
}

function setAutoHide(alertDiv) {
    // Set a timer to fade out after 5 seconds
    setTimeout(() => {
        fnHide(alertDiv);
    }, 3000);

    // Store the timer in case we need to reset it
    // alertDiv.data("fadeTimer", fadeTimer);
}

