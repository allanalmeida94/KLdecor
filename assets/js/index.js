// Variáveis para validação do formulário
const form = document.getElementById('form');
const fields = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const cellPhone = document.querySelector('.inputCellphone');

// variáveis para atualização da data do copyright
let yearTag = document.querySelector('.year');
let date = new Date();
yearTag.innerHTML = date.getFullYear();


form.addEventListener('submit', event => {
    event.preventDefault();
    isEmpty();
    phoneValidate();
});

cellPhone.addEventListener('keyup', event => {
    let input = event.target;
    input.value = phoneMask(input.value);  
});

form.addEventListener('input', () => {
    nameValidate();
    emailValidate();
    descriptionValidate();
});


// Funções para validação dos fields do formulário
function isEmpty() {


    for (const field of fields) {

        if (field.value === "") {
            alert("Preencha o(s) campo(s) obrigatório(s) *");
            return;
        }
       
    } 

}


function setError(index) {
    fields[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index) {
    fields[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate() {

    if (fields[0].value.length > 0 && fields[0].value.length < 3) {
        setError(0);
    } else {
        removeError(0);
    }
}

function emailValidate() {
    if ((!emailRegex.test(fields[1].value)) && fields[1].value.length > 0) {
        setError(1);
    } else {
        removeError(1);
    }
}

function descriptionValidate() {
    if (fields[2].value.length > 0 && fields[2].value.length < 5) {
        setError(2);
    } else {
        removeError(2);
    }
}

function phoneValidate() {
    if (cellPhone.value.length > 0 && cellPhone.value.length < 15) {
        alert('Celular inválido');
        return;
    } else {
        return;
    }
}

function phoneMask (value) {
    if (!value) return "";
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}
