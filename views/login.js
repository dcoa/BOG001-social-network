import { logIn, logInGoogle } from '../lib/firebaseAuth.js';

export default () => {
  const signin = document.createElement('div');
  signin.setAttribute('class', 'container');

  const login = document.createElement('section');
  login.setAttribute('id', 'login');
  login.innerHTML = '<img src="img/icon.png" alt="logo_image" class="logo"/>';

  const input = document.createElement('form');
  input.setAttribute('class', 'input-container');
  input.innerHTML = `<input type="text" id= "user" placeholder="User name o email" required>
        <br>
        <input type="password" id= "password" placeholder="Contraseña" required>
        <p>¿Olvidaste tú contraseña? <a href="#recover">Click aquí</a></p>
        <button type="submit" class="btn">ENTRAR</button>`;

  const createAccount = document.createElement('div');
  createAccount.setAttribute('class', 'createAccount');
  createAccount.innerHTML = `<p>¿Eres un usuario nuevo? <a href="#createAccount">Crea una cuenta</a></p>
              <p>o ingresa con</p>
              <img src="img/google.png" width="30" height="30" class="google">`;

  login.appendChild(input);
  login.appendChild(createAccount);
  signin.appendChild(login);

  // Ingresar con correo y contraseña
  input.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = input.user.value;
    const password = input.password.value;
    logIn(user, password);
  });

  // Ingresar con Google
  createAccount.querySelector('.google').addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    logInGoogle(provider);
  });

  return signin;
};
