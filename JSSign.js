function emailIsValid(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function dangky() {
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (_.isEmpty(name)) {
        document.getElementById('errorsv').innerHTML = '× Please enter your name !';
        document.getElementById('name').className = "input-error"
    } else {
        document.getElementById('errorsv').innerHTML = '';
    }

    if (_.isEmpty(username)) {
        document.getElementById('errorhvt').innerHTML = '× Please enter your username !';
        document.getElementById('username').className = "input-error"
    } else {
        document.getElementById('errorhvt').innerHTML = '';
    }

    if (_.isEmpty(email)) {
        document.getElementById('errormail').innerHTML = '× Please enter your email !';
        document.getElementById('email').className = "input-error"
    } else if (!emailIsValid(email)) {
        document.getElementById('errormail').innerHTML = '× Email không hợp lệ';
    } else {
        document.getElementById('errormail').innerHTML = '';
    }
    if (_.isEmpty(password)) {
        document.getElementById('errorpass').innerHTML = '× Please enter your password !';
        document.getElementById('password').className = "input-error"
    } else {
        document.getElementById('errorpass').innerHTML = '';
    }
}
class User {
    constructor(name, username, password, email, role) {
        console.log('ceate here');
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }
    getUserName() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    xuatThongtin() {
        console.log(`Name: ${this.name} Username: ${this.username} Password: ${this.password} Email: ${this.email} Role: ${this.role}`);
    }

}

class StoreUser {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].getUserName() === user.getUserName()) {
                return false;
            }
        }
        this.users.push(user);
        return true;
    }
    getListUser() {
        return this.users;
    }
    save() {
        if (this.users.length > 0) {
            const convertArrayToObj = JSON.stringify(this.users);
            localStorage.setItem('users', convertArrayToObj);
        }
    }
    getData() {
        const data = localStorage.getItem('users');
        if (data) {
            const arrUser = JSON.parse(data);
            const listUser = [];
            for (let i = 0; i < arrUser.length; i++) {
                const userTemp = new User(arrUser[i].name, arrUser[i].username, arrUser[i].password, arrUser[i].email, arrUser[i].role);
                listUser.push(userTemp);
            }
            this.users = listUser;
        }
    }
}
const store = new StoreUser();
store.getData();
console.log(store.getListUser());
document.getElementById('SignUp').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const Username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    if (name === '' || Username === '' || email === '' || password === '' || role === '') {

    } else {
        const user = new User(name, Username, password, email, role);
        const isCreate = store.addUser(user);
        if (isCreate) {
            alert('Đăng ký thành công');
            store.save();
            window.location.href = 'login.html';
        } else {
            alert('Username đã tồn tại');
        }
        console.log(isCreate);
    }
})