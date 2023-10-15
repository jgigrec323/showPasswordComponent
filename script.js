const eye = document.getElementById("eye");
const lock = document.getElementById("lock");
const passwordInput = document.querySelector('.password');
const whiteBg = document.querySelector('.whiteBg');

eye.addEventListener("click", () => {

    if (passwordInput.type == "password") {
        setTimeout(() => {
            passwordInput.type = "text";
        }, 150);
        whiteBg.classList.add("active");
        lock.classList.add("active");
        eye.setAttribute("class", "fa-regular fa-eye-slash")
        eye.classList.remove("active")

    } else {
        passwordInput.type = "password"

        whiteBg.classList.remove("active");
        lock.classList.remove("active");
        eye.setAttribute("class", "fa-regular fa-eye")
        eye.classList.add("active")
    }

})