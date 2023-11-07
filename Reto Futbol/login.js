document.getElementById('login-tab').addEventListener('click', function () {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    this.classList.add('active');
    document.getElementById('register-tab').classList.remove('active');
});

document.getElementById('register-tab').addEventListener('click', function () {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    this.classList.add('active');
    document.getElementById('login-tab').classList.remove('active');
});

document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();

    var loginUsername = document.getElementById('login-username').value;
    var loginPassword = document.getElementById('login-password').value;
    var message = document.getElementById('message');

    // Realiza la lógica de inicio de sesión aquí.

    message.textContent = 'Inicio de sesión exitoso o fallido.';
});

document.getElementById('register').addEventListener('submit', function (e) {
    e.preventDefault();

    var registerUsername = document.getElementById('register-username').value;
    var registerPassword = document.getElementById('register-password').value;
    var message = document.getElementById('message');

    // Realiza la lógica de registro aquí.

    message.textContent = 'Registro exitoso o fallido.';
});
