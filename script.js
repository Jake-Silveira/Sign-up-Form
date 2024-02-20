let confirm = document.getElementById('confirm')
let submit = document.getElementById('createAccount')


var passwordValidation = function(){
    if (document.getElementById('password').value == document.getElementById('confirm_password').value){
        confirm.style.color = 'green';
        confirm.innerHTML = 'Passwords Match';
        return false;
    } else {
        confirm.style.color = 'red';
        confirm.innerHTML = "Passwords Don't Match";
    };
};

document.getElementById("createAccount").addEventListener("click", function (event){
    if(confirm.innerHTML == "Passwords Don't Match"){
        event.preventDefault();
        alert('Passwords Do Not Match.')
    }
});