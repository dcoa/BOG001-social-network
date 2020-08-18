// Este es el punto de entrada de tu aplicacion
import { signOut } from './lib/firebaseAuth.js';
import home from './views/home.js';
import login from './views/login.js';
import createAccount from './views/createAccount.js';
import recover from './views/recover.js';
import otherThank from './views/thankAccount.js';

const body = document.getElementById('root');
const header = document.getElementById('header');

auth.onAuthStateChanged((user) => {
  if (user) {
    header.style.display = 'block';
    console.log('esta dentro');
  } else {
    console.log('debe entrar');
    window.location.hash = '#home';
  }
});

const router = (rute) => {
  body.innerHTML = ' ';
  switch (rute) {
    case '#home':
      return body.appendChild(home());
      break;
    case '#login':
      return body.appendChild(login());
      break;
    case '#createAccount':
      return body.appendChild(createAccount());
      break;
    case '#recover':
      return body.appendChild(recover());
      break;
    case '#thankAccount':
      return body.appendChild(otherThank());
      break;
    default:
  }
};

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});


const logout = document.querySelector('#logout');
logout.addEventListener('click', () => {
  signOut();
  header.style.display = 'none';
});
