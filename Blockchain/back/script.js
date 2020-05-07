function init() {

    document.getElementById("reg-submit").addEventListener("click", submitReg);
    document.getElementById("auth-submit").addEventListener("click", submitAuth);
}

function submitAuth() {
    var form = document.forms.form_auth;
    var login = form.elements.a_login.value;
    var password = form.elements.a_password.value;
    document.write(login + " " + password);
}

function submitReg() {
    var form = document.forms.form_reg;
    var name = form.elements.name.value;
    var login = form.elements.login.value;
    var password = form.elements.password.value;
    shopContract.doesExist(login , (e, r) =>
    {
        if(!r)
        shopContract.register(name, login, password, ()=>{});
    })
    document.write(name + " " + login + " " + password);
}



document.addEventListener("DOMContentLoaded", init);