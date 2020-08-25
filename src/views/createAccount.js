import { signUp } from '../lib/firebaseAuth.js';

export default () => {
  const createAccount = document.createElement('div');
  createAccount.setAttribute('class', 'accountOne');

  const sectionAccount = document.createElement('section');
  sectionAccount.setAttribute('id', 'createAccount');

  sectionAccount.innerHTML = ` <h1>Crea una nueva Cuenta</h1>
          <form id="account">
            <label for="nameUser">Nombre de Usuario</label>
            <input type="text" id="nameUser" class="controls" placeholder="Nombre de Usuario" required title="Llena el campo"/>
            <br>
            <label for="correo">Email</label>
            <input type="text" id="correo" class="controls" placeholder="usuario@gmail.com"  required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Inserta un correo electronico válido"/>
            <br>
            <label for="contraseña">Contraseña</label>
            <input type="password" id="contraseña" class="controls" placeholder="*********" required pattern=".{6,}" title="Debe contener 6 o más carácteres"/>
            <br>
            <label for="birthday">Fecha de Nacimiento</label>
            <input type="text" id="birthday" class="controls" placeholder="27/08/2000" required  pattern= "(0[1-9]|1[0-9]|2[0-9]|3[01])/(0[1-9]|1[012])/[0-9]{4}" title="Día/Mes/Año"/>
            <br>
            <br>
            <button type= "submit" id="buttonOne" class="btn">REGISTRARSE</button>
          </form>`;

  createAccount.appendChild(sectionAccount);
  const form = createAccount.querySelector('#account');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameUser = form.nameUser.value;
    const email = form.correo.value;
    const password = form.contraseña.value;
    const birthday = form.birthday.value;
    signUp(email, password, nameUser);
    window.location.hash = '#thankAccount';

  });

  return createAccount;
};
