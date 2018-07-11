const nameInput = document.querySelector('#name');
// var namePattern = /{2, }/;
const nameInfo = document.querySelector('#name-info');
const emailInput = document.querySelector('#email');
const emailPattern = /^[-._\w\d]+@(?:[\w\d]+\.)+[\w]{2,6}$/;
const emailInfo = document.querySelector('#email-info');
const wrongClass = 'wrong';
const objValid = {
  email: false,
  name: false
};

emailInput.addEventListener('keyup', (e) => {
    const emailValue = e.target.value.toLowerCase();
    if(emailPattern.test(emailValue)){
        emailInfo.textContent = 'email is ok';
        emailInfo.classList.remove(wrongClass);
        objValid.email = true;
    }else{
        emailInfo.textContent = 'wrong inputting email';
        emailInfo.classList.add(wrongClass);
        objValid.email = false;
    }
    checkField();
});

nameInput.addEventListener('keyup', (e) => {
    const nameValue = e.target.value;
    if(nameValue.length >= 2){
        nameInfo.textContent = 'name is ok';
        nameInfo.classList.remove(wrongClass);
        objValid.name = true;
    }else{
        nameInfo.textContent = 'wrong inputting name';
        nameInfo.classList.add(wrongClass);
        objValid.name = false;
    }
    checkField();
});

let timeOut;

function checkField() {
    clearTimeout(timeOut);
    const timeTimeOut = 1000;
    timeOut = setTimeout(() => {
        if(objValid.email && objValid.name){
            alert('Form fields is ok');
        }
    }, timeTimeOut);
}

