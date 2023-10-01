class User {
    constructor(name, username, password, email, role) {
        this.name = name
        this.username = username
        this.password = password
        this.email = email
        this.role = role
    }
    getUserName() {
        return this.username
    }
    getRole() {
        return this.role
    }
    getPassword() {
        return this.password
    }
    xuatThongTin() {
        console.log(`Name: ${this.name} UserName: ${this.username} password: ${this.password}
      email: ${this.email} role: ${this.role}`)
    }
}

class StoreUser {
    constructor() {
        this.users = []
    }
    addUser(user) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].getUserName() === user.getUserName()) {
                return false
            }
        }
        this.users.push(user)
        return true
    }
    login(username, password) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].getUserName() === username &&
                this.users[i].getPassword() === password) {
                return this.users[i]
            }
        }
        return false
    }
    getListUser() {
        return this.users
    }
    save() {
        if (this.users.length > 0) {
            const convertArrayToObj = JSON.stringify(this.users)
            localStorage.setItem('users', convertArrayToObj)
        }
    }
    saveUser(user) {
        localStorage.setItem('auth', JSON.stringify(user))
    }
    parseUser() {
        const userLogin = localStorage.getItem('auth')
        if (userLogin) {
            const user = JSON.parse(userLogin)
            return user
        }
        return null
    }
    getData() {
        const data = localStorage.getItem('users')
        if (data) {
            const arrUser = JSON.parse(data)
            const listUser = []
            for (let i = 0; i < arrUser.length; i++) {
                const userTemp = new User(arrUser[i].name, arrUser[i].username, arrUser[i].password, arrUser[i].email, arrUser[i].role)
                listUser.push(userTemp);
            }
            this.users = listUser
        }
    }

}
const store = new StoreUser()
store.getData()
console.log(store.getListUser())