import { currentUser } from '../lib/firebaseAuth.js';
import { currentUserPost } from '../lib/firebaseFirestore.js';
import { deletePost } from '../lib/firebaseFirestore.js';

export default () => {

    const profileContainer = document.createElement('div');
    const profile = document.createElement('div');
    profileContainer.appendChild(profile);
    profile.setAttribute('id', 'profile');
    profile.innerHTML = `<img src="${currentUser().photoURL}" id="preview" alt="photoUser" class="photo"/>
        <div class="default-image"></div>
        <h1>${currentUser().displayName}</h1>
        <input type="file" id="archivo" name="archivo"/>
        <ul>
            <li>
            <a href="#">${currentUser().email}</a>
            </li>
        </ul>
        <h3>Sobre mi</h3>
        <input type="text" id="biography" class="aboutMe" placeholder="Cuéntanos de ti"/>`;

    const photos = profile.querySelector('#archivo');
    const previewPhoto = profile.querySelector('#preview');
    const defaultImage = profile.querySelector('.default-image');

    photos.addEventListener('change', () => {
        const file = photos.files[0];
        console.log(file);
        if (file) {
          const reader = new FileReader();
          defaultImage.style.display = 'none';
          previewPhoto.style.display = 'block';
          reader.addEventListener('load', () => {
            previewPhoto.setAttribute('src', reader.result);
          });
          reader.readAsDataURL(file);
        } else {
          defaultImage.style.display = null;
          previewPhoto.style.display = null;
          previewPhoto.setAttribute('src', '');
        }
      });

      const postProfile = document.createElement('section');
      postProfile.setAttribute('id', 'profileBody');
      currentUserPost(postProfile, currentUser());

      profileContainer.appendChild(postProfile);

    /*window.addEventListener('click', (e)=>{

      if(e.target == postProfile.querySelector('#deleteIcon')){
        postProfile.querySelector('#confirm').style.display = 'flex';
      }else if (e.target == postProfile.querySelector('#deleteBtn')) {
        e.preventDefault();
        deletePost();
        postProfile.querySelector('#confirm').style.display = 'none';
      }
      else{
        postProfile.querySelector('#confirm').style.display = 'none';
      }

    })*/
    return profileContainer;
};
