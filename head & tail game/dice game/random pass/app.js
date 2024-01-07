const genratename = document.getElementById('passwordt')
const numlength = 10
const alphabad = 'abcdefghijklmnopqrstuvwzyz';
const numbers = '123456789';
const special = '@#$%^&*()_+{}"]';
const capital = 'ABCDEFGHIJKLMNOPQRSTUVWZYZ'
const sumup = alphabad + numbers + special + capital;

function generatepassword() {

    let passwordt ='';
    passwordt += alphabad[Math.floor(Math.random()*alphabad.length)]
    passwordt += numbers[Math.floor(Math.random()*numbers.length)]
    passwordt += special[Math.floor(Math.random()*special.length)]
    passwordt += capital[Math.floor(Math.random()*capital.length)]

    for(i=0; numlength > passwordt.length; i++){
        passwordt += sumup[Math.floor(Math.random()*sumup.length)]
    }
    genratename.value=passwordt
}
