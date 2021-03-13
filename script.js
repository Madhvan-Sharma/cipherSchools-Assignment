const submit = document.getElementById('login-submit');
let userName = "Guest";

submit.addEventListener('click', function(e){
    console.log('login button clicked');
    e.preventDefault();

    userName = document.getElementById('username').value;
    console.log(userName);

    window.location.href= "https://madhvan-sharma.github.io/cipherSchools-Assignment/homepage.html?username="+userName;
    // localStorage["username"] = userName;
    // window.location.href= "/homepage.html";


});