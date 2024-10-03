function toggleForms( {
    var loginForm = document.getElementById('login-form');
    var registerForm = document.getElementById('register-form');

    if (loginForm.classList.contains('active')) {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    } else {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    }
}
)