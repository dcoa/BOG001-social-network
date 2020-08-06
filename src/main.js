// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import home from './views/home.js';
import login from './views/login.js';
import createAccount from './views/createAccount.js';
import recover from './views/recover.js';
import otherThank from './views/thankAccount.js';


header.style.display = 'none';
const body = document.getElementById('root');

body.appendChild(home());
console.log(home);
myFunction();
