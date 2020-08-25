export const publish = (userPhoto) =>{
  const modal = document.createElement('section');
  modal.setAttribute('class', 'modal');
  modal.innerHTML = `<div class="modal-content">
        <header id="ModalHeader">
          <span class="close">&times;</span>
          <img id="userPhoto" src=" " >
          <p>Comenta sobre tus peliculas o series favoritas</p>
        </header>
        <form id='formComment' enctype="multipart/form-data">
          <textarea rows="2"></textarea>
          <div>
            <label>
              <input type="file" id="loadImg">
            </label>
            <select>
              <div>
              <option value="0"> Categoría &#9660;</option>
              <option value="Movie">Peliculas</option>
              <option value="Documentary">Documentales</option>
              <option value="Serie">Series</option>
              </div>
            </select>
          </div>
          <button type="submit" class="btn newpublish">PUBLICAR</button>
        </form>
      </div>`

  let photo =  modal.querySelector('#userPhoto');
  photo.src = `${userPhoto}`;
  const publish = modal.querySelector('#formComment');
  publish.addEventListener('submit', (e)=>{
    e.preventDefault();
    modal.style.display = 'none';
  });

  modal.querySelector('.close').addEventListener('click', ()=> modal.style.display = 'none');

  return  modal;
};
