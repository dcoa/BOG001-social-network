// Este es el punto de entrada de tu aplicacion
import { signOut } from './lib/firebaseAuth.js';
import home from './views/home.js';
import login from './views/login.js';
import createAccount from './views/createAccount.js';
import recover from './views/recover.js';
import otherThank from './views/thankAccount.js';
import timeline from './views/timeline.js';
import profile from './views/profile.js';


const body = document.getElementById('root');
const header = document.getElementById('header');

auth.onAuthStateChanged((user) => {
  if (user) {
    window.location.hash = '#timeline';
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
    case '#timeline':
      return body.appendChild(timeline());
      break;
    case '#profile':
      return body.appendChild(profile());
      break;
    default:
  }
};

window.addEventListener('hashchange', () => {
  router(window.location.hash);
  if(window.location.hash == '#timeline' || window.location.hash =='#profile'){
    header.style.display = 'block';
  }else{
    header.style.display = 'none';
  }
});


const logout = document.querySelector('#logout');
logout.addEventListener('click', () => {
  signOut();
});
