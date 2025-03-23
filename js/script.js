const listaUsuarios = document.getElementById('listaUsuarios');

fetch('https://jsonplaceholder.typicode.com/users')
    .then ((response) =>{
        if(!response.ok) {
            throw new Error('Ha sido imposible cargar los datos');
        }return response.json();
    })  
    .then ((data) => {
        console.log(data)
    })