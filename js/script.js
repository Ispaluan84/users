const listaUsuarios = document.getElementById('listaUsuarios');
const min = 18;
const max = 65;
const ageRandom = () => Math.floor(Math.random()*(max - min) - min);

function getUsers(){
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then ((response) =>{
        if(!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }return response.json();
    })  
  }

  getUsers().then ((data) => {
    data.forEach(user => {
      const {id} = user;
      const{street, suite, city} = user.address;
      const newUser = {
        ...user,
        age: ageRandom(),
        image:`../assets/img/${id}.jpeg`,
        address:`${street} ${suite} ${city}`
      }
      const {name, age, username, image, phone, email, address} = newUser;
        listaUsuarios.innerHTML += template(name, age, username, image, phone, email, address); 
       })
}) .catch (error => console.error(error))

  function template (name, age, username, image, phone, email,address) {
     return `<li>
        <img src=${image} alt=${name}/>
        <h2>Name: ${name}</h2>
        <p>Username: ${username}</p>
        <p>Age: ${age}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
        <p>Address: ${address}</p>
      </li>
    `
  }