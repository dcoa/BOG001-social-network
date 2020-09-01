import { currentUser } from '../lib/firebaseAuth.js';
import {publish} from './modal.js';
import { loadPost } from '../lib/firebaseFirestore.js';

export default () => {

  let user = currentUser();

  const timelineContainer = document.createElement('section');
  timelineContainer.setAttribute('class', 'containerTimeline');

  const newBtn = document.createElement('button');
  newBtn.setAttribute('class', 'btn');
  newBtn.type = 'submit';
  newBtn.textContent = 'NUEVA PUBLICACIÓN';

  const card = document.createElement('section')

  timelineContainer.appendChild(newBtn);
  timelineContainer.appendChild(card);
  const modal = timelineContainer.appendChild(publish(user.photoURL, user.uid));

loadPost(card, user)


  newBtn.addEventListener('click', () => {
    modal.style.display = "flex";
  });

//icons.querySelector('.commentaries').addEventListener('click', () => {
//icons.querySelector('.inputCommentandButton').style.display = "block";});


  return  timelineContainer;
};

/*card.innerHTML = `
   <div class="card">
    <div class="content">
    <div class="header">
      <div class="profile-pic"></div>
        <div class="detail">
        <p class="name">Jose Maria</p>
        <p class="posted">2 hours ago</p>
      </div>
      <div class="categories"></div>
    </div>
    <div class="desc">
      "La pelicula El Origen tiene una calificación IMDb 8.8/10, pero para mi deberia ser 5/10, ¿Ustedes que opinan?
    </div></div></div>`;*/
