
const user = {
    name:'Ivan',
    email:'ivan94@mail.ru',
    password:'ivanushka',
}
const Invalid2 = document.getElementsByClassName('invalid2');

const Email = document.getElementById("email");
const ps = document.getElementById("passworde");


const form = document.getElementById('form_1');

Email.addEventListener("input",(event) =>{
    const isValid = event.target.value;
    if (isValid == ""){
        Email.classList.add("border_red");

    }
    else {
        Email.classList.remove("border_red");
    }

});

const btn = document.getElementById('btn');


const error = document.getElementById('error');

Email.addEventListener('input',(event) =>{

    const isValid = event.target.value;
    if (isValid == ''){
        btn.disabled = true;

    }
    else {

        btn.disabled = false;
    }
});

ps.addEventListener('input',(event) =>{

    const isValids = event.target.value;
    if (isValids == ''){

        btn.disabled = true;

    }
    else{

        btn.disabled = false;
    }
});

const hello = document.getElementById('hello');


btn.addEventListener('click',(event)=>{
    if (event.target.value === user.email && event.target.value === user.password ){
        form.delete();
        hello.innerText = `Hello ${user.name}`;
    }
else{
    error.innerText =  ' Вы ввели неверный пароль,попробуйте снова';
    Email.valeu = '';
    ps.value = '';
    }
})




