// Crear un nuevo post
export const commentPublish = (comment, category, userID) => {
  try {
    const userDocRef = data.collection('post').doc().set({
      comment,
      category,
      userID,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      likes: [],
    });
  } catch (e) {
    console.log(e);
  }
};

// Cargar los posrt de todos los usuarios
export const loadPost = async (containerDOM, callback) => {
  try {
    const users = await userInfo();
    await data.collection('post').orderBy('date', 'desc').onSnapshot((querySnapshot) => {
      containerDOM.innerHTML = '';
      querySnapshot.forEach((doc) => {
        const postid = doc.id;
        const post = doc.data();
        const user = users.find(user => user.id === post.userID);
        containerDOM.appendChild(callback(post, user, postid));
      });
    });
  } catch (e) {
    containerDOM.innerHTML = 'Se ha producido un error intenta recargar la página';
    console.log(e);
  }
};

// Cargar post del usuario logueado
export const currentUserPost = async (containerDOM, currentUser, callback) => {
  try {
    const user = {
      name: currentUser.displayName,
      photo: currentUser.photoURL,
    };
    await data.collection('post').where('userID', '==', currentUser.uid).orderBy('date', 'desc')
      .onSnapshot((querySnapshot) => {
        containerDOM.innerHTML = '';
        querySnapshot.forEach(async (doc) => {
          const postid = doc.id;
          const post = doc.data();
          containerDOM.appendChild(callback(post, user, postid));
        });
      });
  } catch (e) {
    containerDOM.innerHTML = 'Se ha producido un error intenta recargar la página';
    console.log(e);
  }
};

// Eliminar post seleccionado
export const deletePost = async (id) => {
  try {
    await data.collection('post').doc(id).delete();
  } catch (e) {
    console.log(e);
  }
};

// Traer la información de todos los usuarios de la app
export const userInfo = async () => {
  const users = [];
  await data.collection('users').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        name: doc.data().name,
        photo: doc.data().photo,
        biography: doc.data().biography,
      });
    });
  });
  return users;
};

// Editar campo dentro de una colección
export const updateDataField = async (collectionName, id, field) => {
  try {
    await data.collection(collectionName).doc(id).update(field);
  } catch (error) {
    console.log(error);
  }
};

// Mostrar cambios en el campo de biografía
export const updateBiography = async (id, containerBio) => {
  try {
    await data.collection('users').doc(id).onSnapshot((querySnapshot) => {
      const user = querySnapshot.data();
      containerBio.innerHTML = user.biography;
      console.log(user);
    });
  } catch (error) {
    console.log(error);
  }
};

// Coloca y quita los likes.
export async function likePost(currentUserId, postId, pushLike) {
  const postRef = data.collection('post').doc(postId);
  if (pushLike) {
    postRef.update({
      likes: firebase.firestore.FieldValue.arrayRemove(currentUserId),
    });
  } else {
    postRef.update({
      likes: firebase.firestore.FieldValue.arrayUnion(currentUserId),
    });
  }
}
