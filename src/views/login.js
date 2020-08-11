export default () => {
  history.replaceState({}, 'log in', '#login');
  const signin = document.createElement('div');
  signin.setAttribute('class', 'container');

  const login = document.createElement('section');
  login.setAttribute('id', 'login');
  login.innerHTML = `<img src="img/icon.png" alt="logo_image" class="logo"/>`;


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
              <p>o inglesa con</p>
              <img src="img/google.png" width="30" height="30" class="google">`;


  login.appendChild(input);
  login.appendChild(createAccount);
  signin.appendChild(login);

  input.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = input.user.value;
    const password = input.password.value;
    logIn(user, password);
  });
  createAccount.querySelector('.google').addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    logInGoogle(provider);
  });
  return signin;
};


async function logIn(email, password) {
  try {
    const userLogIn = await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
}

async function logInGoogle(provider) {
  try {
    const userLogIn = await auth.signInWithPopup(provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = userLogIn.credential.accessToken;
    // The signed-in user info.
    const user = userLogIn.user;
    console.log(user);
  }catch(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    console.log(errorCode, errorMessage);
  }
}
