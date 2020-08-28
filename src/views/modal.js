import { commentPublish } from '../lib/firebaseFirestore.js';

export const publish = (userPhoto, userID, userName) =>{
  const modal = document.createElement('section');
  modal.setAttribute('class', 'modal');
  modal.innerHTML = `<div class="modal-content">
        <header id="ModalHeader">
          <span class="close">&times;</span>
          <img id="userPhoto" src=" " >
          <p>Comenta sobre tus peliculas o series favoritas</p>
        </header>
        <form id='formComment' enctype="multipart/form-data">
          <textarea id="comment"rows="2" required></textarea>
          <div>
            <label>
              <input type="file" id="loadImg">
            </label>
            <select id="category" required>
              <option value=""> Categoría &#9660;</option>
              <option value="Movie">Peliculas</option>
              <option value="Documentary">Documentales</option>
              <option value="Serie">Series</option>
            </select>
          </div>
          <button type="submit" class="btn newpublish">PUBLICAR</button>
        </form>
      </div>`

  let photo =  modal.querySelector('#userPhoto');
  photo.src = `${userPhoto}`;
  const publish = modal.querySelector('#formComment');

  //const img = form.loadImg.value;
  publish.addEventListener('submit', (e)=>{
    e.preventDefault();
    const comment = publish.comment.value;
    const category = publish.category.value;
    commentPublish(comment, category, userID);
    publish.reset();
    modal.style.display = 'none';
  });

  modal.querySelector('.close').addEventListener('click', ()=> {
    modal.style.display = 'none'});

  return  modal;
};
