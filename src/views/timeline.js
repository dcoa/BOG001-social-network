import { currentUser } from '../lib/firebaseAuth.js';
import {publish} from './modal.js';

export default () => {
  const timeline = document.createElement('section');
  timeline.setAttribute('id', 'timelineBody');
  timeline.innerHTML = `<button type="button" class="btn newpublish">NUEVA PUBLICACIÓN</button>`;
  let user = currentUser();
  console.log(user.photoURL);
  timeline.querySelector('.newpublish').addEventListener('click', () => {
    const modal = timeline.appendChild(publish(user.photoURL));
    modal.style.display = "flex";
  });

  return timeline;
};
