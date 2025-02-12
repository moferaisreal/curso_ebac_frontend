const form = document.getElementById('form');
const nome = document.getElementById('nome');
let formValid = false;


function validateName(nome){
    const nomeConvertArray = nome.split(' ');
    return nomeConvertArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroDaConta = document.getElementById('conta');
    const valorDeposito = document.getElementById('valor');
    const sucesso = `Montante de: <b>${valorDeposito.value}</b>, depositado para <b>${nome.value}</b> na conta: <b>${numeroDaConta.value}</b>`;


    formValid= validateName(nome.value)
    if (formValid){
        const messageContainer= document.querySelector(".successMessage")
        messageContainer.innerHTML = sucesso;
        messageContainer.style.display='block';

        nome.value='';
        numeroDaConta.value='';
        valorDeposito.value='';
    } else {
        document.querySelector('.errorMessage').style.display='block';
        nome.style.border = '1px solid var(--color1)';
    }
})

nome.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formValid= validateName(e.target.value)
    formValid= validateName(nome.value)

    if (!formValid){
        document.querySelector('.errorMessage').style.display='block';
        nome.classList.add('error');
    } else {
        nome.classList.remove('error');
        document.querySelector('.errorMessage').style.display='none';
    }
});