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
              <img src="" alt=""/>
              <div id="datosPersonales">
                <li><strong>Nombre:</strong>${element.name}</li>
                <p><strong>Edad:</strong></p>
                <p><strong>Username:</strong>${element.username}</p>
                <p><strong>Teléfono:</strong>${element.phone}</p>
                <p><strong>Email:</strong>${element.email}</p>
              </div>
              <p><strong>Compañía:</strong>${element.company.name}</p>
              <p><strong>Dirección:</strong>${element.address.street},${element.address.suite},${element.address.city}</p>

            </div>`

        })
    }) 