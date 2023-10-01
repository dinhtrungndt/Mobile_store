$(document).ready(function() {
    $('#eye').click(function() {
        if ($('#password').attr('type') == 'password') {
            $('#password').attr('type', 'text');
            $('#eye').attr('class', 'fa fa-eye-slash');
        } else {
            $('#password').attr('type', 'password');
            $('#eye').attr('class', 'fa fa-eye');
        }
    });
});

function dangnhap() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (_.isEmpty(username)) {
        document.getElementById('errorname').innerHTML = '× Username cannot be blank.';
        document.getElementById('username').className = "input-error"
    } else {
        document.getElementById('errorname').innerHTML = '';
    }

    if (_.isEmpty(password)) {
        document.getElementById('errorpass').innerHTML = '× Password cannot be blank.';
        document.getElementById('password').className = "input-error"
    } else {
        document.getElementById('errorpass').innerHTML = '';
    }
}
document.getElementById('SignUp') && document.getElementById('SignUp').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;

    if (name === '' || username === '' || password === '' || email === '' || role === '') {
        alert('invalid value')
    } else {
        const user = new User(name, username, password, email, role)
        const isCreate = store.addUser(user)
        if (isCreate) {
            alert('đăng ký thành công')
            store.save()
        } else {
            alert('username đã tồn tại')
        }
        console.log(isCreate)

    }
})

document.getElementById('LogIn') && document.getElementById('LogIn').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value
    if (username === '' || password === '') {
        return
    }
    const isLogin = store.login(username, password)
    store.saveUser(isLogin)
    if (isLogin) {
        if (isLogin.getRole() === 'admin') {
            window.location.href = 'TrangADmin.html'
        }
    } else {
        document.getElementById('errorpass').innerHTML = '× User account or password incorrect.';
    }
    if (isLogin) {
        if (isLogin.getRole() === 'user') {
            window.location.href = 'TrangUser.html'
        }
    } else {
        document.getElementById('errorpass').innerHTML = '× User account or password incorrect.';
    }
})