import { currentUser } from '../lib/firebaseAuth.js';

export default () => {
  const profile = document.createElement('section');
  profile.setAttribute('id', 'timelineBody');
  profile.innerHTML = `<p>Aqui va un comentario</p>`;
  let user = currentUser();
  console.log(user.photoURL);
  profile.querySelector('p').addEventListener('click', () => {
    console.log('esto esta muy loco se descuadro');
  });

  return profile;
};
