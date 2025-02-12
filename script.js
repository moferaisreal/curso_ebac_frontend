const arrayAlunos = document.getElementById('arrayDeAlunos');
const adicionarAluno = document.getElementById('addAluno');
const adicionarNota = document.getElementById('addNota');
const formAluno = document.getElementById('formAluno');
const formMateria = document.getElementById('formMateria');
const corpoTabela = document.querySelector('tbody')
const adicionarNomeAluno = document.getElementById('alunoInput')
const nomeMateria = document.getElementById('materiaInput');
const valorNota = document.getElementById('notaInput');
const mostrarSituacaoFinal = document.getElementById('emojiFinal');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando"/>';
const imgRecuperacao = '<img src="./images/recuperacao.png" alt="emoji em dúvida"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji desapontado"/>';
const imgCheck = '<img src="./images/check.png"/>';
const imgCross = '<img src="./images/cross.png"/>';
let linhas = '';
const arrayALunos = [];
const arrayNotas = [];
const arrayMaterias = [];
//const mediaCalcul = parseFloat(prompt("Digite a média para aprovação!"))

function validarNome() {
    const nomeConvertArray = adicionarNomeAluno.split(' ');
    return nomeConvertArray.length >= 2;
}

formMateria.addEventListener('submit', function(e){
    e.preventDefault();

    addLinha();
    updateTable()
    updateMedia()
    
});

function addLinha() {
    console.log(`${nomeMateria.value}+${valorNota.value}`);
    if(arrayMaterias.includes(nomeMateria.value)){
        alert(`A ${nomeMateria.value} matéria já foi adicionada!'`);
    } else {
        arrayNotas.push(parseFloat(valorNota.value));
        arrayMaterias.push(nomeMateria.value);
        let linha = '<tr>'
        linha += `<td>${nomeMateria.value}</td>`;
        linha += `<td>${valorNota.value}</td>`;
        linha += `<td>${valorNota.value <= 5? imgReprovado : valorNota.value > 5 && valorNota.value < 7 ? imgRecuperacao : imgAprovado}</td>`; 
        linha += '</tr>';

        linhas += linha;
    }
}

function updateTable(){
    corpoTabela.innerHTML = linhas;
    nomeMateria.value ='';
    valorNota.value = '';
}

function calcularMediaFinal() {
    let somaDasNotas = 0;

    for (let i =0; i < arrayNotas.length; i++) {
        somaDasNotas += arrayNotas[i]
    }

    return somaDasNotas / arrayNotas.length;

}

function updateMedia(){
    const mediaFinalOutput = calcularMediaFinal();

    document.getElementById('mediaFinal').innerHTML = mediaFinalOutput.toFixed(2);
    document.getElementById('emojiFinal').innerHTML = mediaFinalOutput>= 7? imgCheck : imgCross;

    console.log(arrayNotas);
    console.log(arrayMaterias);
    console.log(somaDasNotas);
    console.log(media);
}
