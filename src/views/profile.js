import { currentUser } from '../lib/firebaseAuth.js';

export default () => {
  const profile = document.createElement('section');
  profile.setAttribute('id', 'timelineBody');
  profile.innerHTML = `<button type="button" class="btn newpublish">NUEVA PUBLICACIÓN</button>`;
  let user = currentUser();
  console.log(user.photoURL);
  peofile.querySelector('.newpublish').addEventListener('click', () => {
    const modal = profile.appendChild(publish(user.photoURL));
    modal.style.display = "flex";
  });

  return profile;
};
