import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { eventList } from "./events/eventList.js"
import "./events/eventHTMLConverter.js"


const eventHub = document.querySelector(".container")
eventHub.addEventListener("userAuthenticated", () => Nutshell())


if (sessionStorage.getItem("activeUser")=== null) {
    LoginForm()
    RegisterForm()
}
else if (sessionStorage.getItem("activeUser") !== null) {
    Nutshell()
}




/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
