// En este apartado creado las variables del formulario. 
class User {
  constructor(name, lastName, tel, email, address, observations) {
    this.name = name;
    this.lastName = lastName;
    this.tel = tel;
    this.email = email;
    this.address = address;
    this.observations = observations;
  }
}

// En este apartado se selecciona todos los datos del formulario
const sendUser = () => {
  const formElements = document.querySelectorAll(".simple-text-box");
  console.log(formElements.length);
  const userData = [];
  formElements.forEach((i) => {
    userData.push(i.value);
  });

  // En este apartado guardamos los datos del arreglo en Json
  const savedData = JSON.parse(localStorage.getItem("register"));
  const userObject = new User(
    userData[0],
    userData[1],
    userData[2],
    userData[3],
    userData[4],
    userData[5]
  );

  // finalizacion de almacenamiento en el carge en el Local Storage
  console.log(userObject);
  if (savedData) {
    savedData.push(userObject);
    localStorage.setItem("register", JSON.stringify(savedData));
  } else {
    localStorage.setItem("register", JSON.stringify([userObject]));
  }
};

// Envio de informacion 
const sendButton = document.querySelector(".send-button");
sendButton.addEventListener("click", sendUser);



