const login11 = document.getElementById('login');
const register11 = document.getElementById('register');
const btn = document.getElementById('btn1');

function register(){
    login11.style.left = '-400px';
    register11.style.left = '50px';
    btn.style.left = '110px';
}

function login(){
    login11.style.left = '50px';
    register11.style.left = '450px';
    btn.style.left = '0px';
}