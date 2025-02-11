const numberOne = document.getElementById('numberA');
const numberTwo = document.getElementById('numberB');
const form = document.getElementById('formComp');
const msg = document.getElementById('message');

form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    console.log("Formulário enviado!"); // Debug


    const num1 = parseFloat(numberOne.value);
    const num2 = parseFloat(numberTwo.value);

    if (num2 > num1) {
        msg.innerHTML = "Sucesso!";
        msg.style.color = "var(--color2)";
    } else {
        msg.innerHTML = "Tente Novamente!";
        msg.style.color = "var(--color1)";

    }
});
