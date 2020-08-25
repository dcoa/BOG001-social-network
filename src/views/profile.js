import { currentUser } from '../lib/firebaseAuth.js';

export default () => {
  const profile = document.createElement('section');
  profile.setAttribute('id', 'profileBody');
  profile.innerHTML = `<div class="comment">
            <p>Aqui va un comentario</p>
            <div id="deleteIcon"></div>
            <div id="confirm">
            <h2>¿Estás seguro que quieres eliminar la publicación?</h2>
            <button type="submit" class="btn" id="deleteBtn">ELIMINAR</button>
            </div>
            </div>`;
  let user = currentUser();

  profile.querySelector('#deleteBtn').addEventListener('submit', ()=>{
    e.preventDefault();
  });

  window.addEventListener('click', (e)=>{
  
    if(e.target == profile.querySelector('#deleteIcon')){
      profile.querySelector('#confirm').style.display = 'flex';
    }else{
      profile.querySelector('#confirm').style.display = 'none';
    }

  })
  return profile;
};
