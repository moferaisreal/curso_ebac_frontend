// Function para organizar os contatos em ordem alfabetica
function organizarContatos() {
    const tbody = document.getElementById('contatosTbody');
    const contacts = Array.from(tbody.children);

    contacts.sort((a, b) => {
        const nameA = a.children[0].textContent.toLowerCase();
        const nameB = b.children[0].textContent.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    contacts.forEach(row => {
        tbody.appendChild(row);
    });
}

// Function para indexar os contatos
function indexarContatos() {
    const tbody = document.getElementById('contatosTbody');
    const indexContainer = document.querySelector('.index');
    const contacts = Array.from(tbody.children);

    indexContainer.innerHTML = '';

    const indexLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'];

    indexLetters.forEach(letter => {
        const link = document.createElement('a');
        link.href = `#${letter}`;
        link.textContent = letter;
        link.addEventListener('click', function(e) {
            e.preventDefault();
            mostrarContatos(letter);
        });
        indexContainer.appendChild(link);
    });

    contacts.forEach(row => {
        const firstLetter = row.children[0].textContent.charAt(0).toUpperCase();
        row.setAttribute('data-index', isNaN(firstLetter) ? firstLetter : '#');
    });
}

// Function para mostrar os contatos pela letra
function mostrarContatos(letter) {
    const tbody = document.getElementById('contatosTbody');
    Array.from(tbody.children).forEach(row => {
        row.style.display = row.getAttribute('data-index') === letter ? 'table-row' : 'none';
    });
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nomeForm').value;
    const telefone = document.getElementById('telefoneForm').value;
    const email = document.getElementById('emailForm').value;

    const contatosDuplicados = Array.from(document.querySelectorAll('#contatosTbody tr')).map(row => ({
        nome: row.children[0].textContent,
        telefone: row.children[1].textContent,
        email: row.children[2].textContent
    }));

    if (contatosDuplicados.some(contact => contact.nome === nome || contact.email === email || contact.telefone === telefone)) {
        alert('Informação já existe na agenda. Por favor, use dados diferentes.');
        return;
    }

    const novoTr = document.createElement('tr');
    novoTr.innerHTML = `<td>${nome}</td><td>${telefone}</td><td>${email}</td>`;
    document.getElementById('contatosTbody').appendChild(novoTr);

    document.getElementById('nomeForm').value = '';
    document.getElementById('telefoneForm').value = '';
    document.getElementById('emailForm').value = '';

    organizarContatos();
    indexarContatos(); 
});

// Busca
document.getElementById('botaoSearch').addEventListener('click', function() {
    const novaBusca = document.getElementById('campoPesquisa').value.toLowerCase();
    const tRows = document.querySelectorAll('#contatosTbody tr');
    
    tRows.forEach(row => {
        const nome = row.children[0].textContent.toLowerCase();
        const telefone = row.children[1].textContent.toLowerCase();
        const email = row.children[2].textContent.toLowerCase();
        
        if (nome.includes(novaBusca) || telefone.includes(novaBusca) || email.includes(novaBusca)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

document.getElementById('campoPesquisa').addEventListener('input', function() {
    if (this.value === '') {
        const tRows = document.querySelectorAll('#contatosTbody tr');
        tRows.forEach(row => row.style.display = '');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    organizarContatos();
    indexarContatos();
    mostrarContatos('A'); // Assuming 'A' is the first letter in your index
});
