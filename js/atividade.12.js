

const listaUsuarios = [
    {
        id:1,
        nome:"Thiago pereira",
        sexo:"Masculino",
        idade:20,
        email:"fulanodetal@termail.com",
    },
    {
        id:2,
        nome:"Thais Lins",
        sexo:"Feminino",
        idade:19,
        email:"fthaisDetal@termail.com",
    },
    {
        id:3,
        nome:"Mariana Ferreira",
        sexo:"Feminino",
        idade:25,
        email:"marianaferreira@gmail.com",
        
    },
    {
        id:4,
        nome:"Pedroa Ivo Silva",
        sexo:"Feminino",
        idade:28,
        email:"manuelatrait@gtepnmail.com",
    },
];

let exibirLista = (element) =>{
    let linha =` <tr>
    <td>${element.id}</td>
    <td>${element.nome}</td>
    <td>${element.sexo}</td>
    <td>${element.idade}</td>
    <td>${element.email}</td>
    </tr>`;
    let tableBody = document.getElementById('table_body');
    tableBody.innerHTML += linha;
};
listaUsuarios.forEach(exibirLista);