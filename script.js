const username = document.getElementById('username')
const surname = document.getElementById('surname')
const email = document.getElementById('email')
const man = document.getElementById('man')
const woman = document.getElementById('woman')

//Данные полученные из базы данных
const dataName = localStorage.getItem('username')
const dataSurname = localStorage.getItem('surname')
const dataEmail = localStorage.getItem('email')
const dataMale = localStorage.getItem('man' && 'woman')


//Функция показа формы регистрации
const showRegForm = state => {
    document.getElementById('window_registration').style.display = state
    document.getElementById('grey').style.display = state
}


//Функция показа формы об успешной регистрации
const successReg = state => {
    if (username.value === '') {
        document.getElementById('success').style.display = "none"
    } if (surname.value === '') {
        document.getElementById('success').style.display = "none"
    } if (email.value === '' ){
        document.getElementById('success').style.display = "none"
    } else {
        document.getElementById('window_registration').style.display = "none"
        document.getElementById('success').style.display = state
        document.getElementById('grey').style.display = state
    }
}



//Функция отправки данных об пользователе в базу данных
const createUser = (callback = () => {successReg('block')}) => {
    localStorage.setItem('username', username.value)
    localStorage.setItem('surname', surname.value)
    localStorage.setItem('email', email.value)
    if (document.getElementById('man').checked) {
        localStorage.setItem('man', true)
    } else {
        localStorage.setItem('man', false)
    }
    if (document.getElementById('woman').checked) {
        localStorage.setItem('woman', true)
    } else {
        localStorage.setItem('woman', false)
    }
    callback
}


// Функция проверки авторизации
const checkReg = state => {
        if (dataName === null && dataSurname === null && dataEmail === null ) {
            showRegForm('block')

        } else {
            document.getElementById('auth').style.display = state
            document.getElementById('grey').style.display = state
            document.getElementById('window_registration').style.display = "none"
        }
}