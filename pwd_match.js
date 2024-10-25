const form = document.querySelector("#signup-form");
const pwdField = document.querySelector("#password");
const pwdConfirmField = document.querySelector("#pwd_confirm");
const errorMsg = document.querySelector(".matching-error");

pwdConfirmField.addEventListener("input", UpdateMatch);
pwdField.addEventListener("input", UpdateMatch);

form.addEventListener("submit", (event) => {
    if (!passwordsMatch()){
        event.preventDefault();
        return;
    }
})

function UpdateMatch() {
    if (!pwdField.value || !pwdConfirmField.value) {
        setErrorDisplayed(false);
        return;
    }

    if (passwordsMatch()) {
        setErrorDisplayed(false);
    } else {
        setErrorDisplayed(true);
    }
}

function setErrorDisplayed(state) {
    errorMsg.style.visibility = state ? "visible" : "hidden";
}

function passwordsMatch() {
    return pwdField.value === pwdConfirmField.value;
}