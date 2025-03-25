const listaUsuarios = document.getElementById('listaUsuarios');

fetch('https://jsonplaceholder.typicode.com/users')
    .then ((response) =>{
        if(!response.ok) {
            throw new Error('Ha sido imposible cargar los datos');
        }return response.json();
    })  
    .then ((data) => {
        data.forEach(element => {
            listaUsuarios.innerHTML += `
            <div id="card">
              <div id="img">
                <li><img src="./assets/img/${element.id}.jpeg" alt="Foto de ${element.name}"/></li>
              </div>
              <div id="datosPersonales">
                <p><strong>Nombre:</strong> ${element.name} <br>
                <strong>Edad:</strong><br>
                <strong>Username:</strong> ${element.username}<br>
                <strong>Teléfono:</strong> ${element.phone}<br>
                <strong>Email:</strong> ${element.email}</p><br>
              </div>
              <div id="datosCompañia">
                <p><strong>Compañía:</strong> ${element.company.name}</p>
                <p><strong>Dirección:</strong> ${element.address.street}, ${element.address.suite}, ${element.address.city}</p>
              </div>
            </div>`

        })
    }) 