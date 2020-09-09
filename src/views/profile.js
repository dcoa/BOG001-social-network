import { currentUser } from '../lib/firebaseAuth.js';
import {
  currentUserPost, deletePost, updateDataField, updateBiography,
} from '../lib/firebaseFirestore.js';
import printPost from '../components/printPost.js';


export default () => {
  const profileContainer = document.createElement('div');
  profileContainer.setAttribute('id', 'profileContainer');
  const profile = document.createElement('div');
  profile.setAttribute('id', 'profile');
  profile.innerHTML = `<h2 id="profileName">Mi perfil</h2>
        <img src="${currentUser().photoURL}" id="preview" alt="photoUser" class="photo"/>
        <div class="default-image"></div>
        <div id="editPhoto">
        <label for="archivo">
        <img src="img/editProfile.png" alt ="Click aquí para subir tu foto">
        </label>
        <input type="file" id="archivo" name="archivo" accept="image/*">
        </div>
        <h1 id="nameUser">${currentUser().displayName}</h1>
        <ul>
            <li id="mail">
            ${currentUser().email}
            </li>
        </ul>
        <h3>Sobre mi</h3>
        <div id="biographyid" contenteditable="false" class="biography">Escribe algo sobre ti</div>
        <img src="img/edit.png" alt ="Edita sobre ti" id="userEdit">
        <button type="submit" class="btn update" id="btnUp">ACTUALIZAR</button>
        <h2 id="publication">Mis publicaciones</h2>`;

  const photos = profile.querySelector('#archivo');
  const previewPhoto = profile.querySelector('#preview');
  const defaultImage = profile.querySelector('.default-image');
  const btnUpdate = profile.querySelector('#btnUp');
  const saveBtn = profile.querySelector('#userEdit');
  const biography = profile.querySelector('#biographyid');
  let currentFile = '';
  updateBiography(currentUser().uid, biography);

  saveBtn.addEventListener('click', () => {
    biography.contentEditable = true;
  });

  // Permite el cambio de imagen de perfil y la sube a storage
  photos.addEventListener('change', () => {
    currentFile = photos.files[0];
    console.log(currentFile);
    if (currentFile) {
      const reader = new FileReader();
      defaultImage.style.display = 'none';
      previewPhoto.style.display = 'block';
      reader.addEventListener('load', () => {
        previewPhoto.setAttribute('src', reader.result);
      });
      reader.readAsDataURL(currentFile);
    } else {
      defaultImage.style.display = null;
      previewPhoto.style.display = null;
      previewPhoto.setAttribute('src', '');
    }
  });

  // Actualiza los campos de foto y biografía
  btnUpdate.addEventListener('click', () => {
    const file = currentFile;
    console.log(file);
    updateDataField('users', currentUser().uid, { biography: biography.innerHTML });
    biography.contentEditable = false;
    if (!file) {
      console.log('No existe archivo para cambiar la imagen!');
    } else {
      const storageRef = storage.ref(`userProfileImgs/${file.name}`);
      const task = storageRef.put(file);
      task.on('state_changed', (snapshot) => {
        task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          currentUser().updateProfile({ photoURL: downloadURL });
          updateDataField('users', currentUser().uid, { photo: downloadURL });
          console.log('File available at', downloadURL);
        });
      }, (error) => {
        console.log(error);
      });
    }
  });

  // Muestra los post del usuario logueado
  const postProfile = document.createElement('section');
  postProfile.setAttribute('id', 'profileBody');
  currentUserPost(postProfile, currentUser(), printPost);
  profileContainer.appendChild(profile);
  profileContainer.appendChild(postProfile);

  return profileContainer;
};
