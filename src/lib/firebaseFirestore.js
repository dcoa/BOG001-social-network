import {printPost} from './printPost.js';

export const commentPublish = (comment, category, userID) => {
  try {
    var userDocRef = data.collection('post').doc().set({
      comment,
      category,
      userID,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    });
  } catch (e) {
    console.log(e);
  }
};

export const loadPost =  async (containerDOM) =>{
  try {
    let users = await userInfo();
      await data.collection('post').orderBy('date','desc').onSnapshot((querySnapshot) => {
        containerDOM.innerHTML= '';
        querySnapshot.forEach( (doc) => {
        let postid = doc.id;
        let post =  doc.data();
        const user =  users.find((user) => user.id === post.userID);
        containerDOM.appendChild(printPost(post, user, postid));
        });
      });
  } catch (e) {
      console.log(e);
  }
};

export const currentUserPost =  async (containerDOM, currentUser) =>{
  try {
      let user = {
        name: currentUser.displayName,
        photo: currentUser.photoURL
      }
      await data.collection('post').where("userID", "==", currentUser.uid).orderBy('date','desc')
      .onSnapshot((querySnapshot) => {
        containerDOM.innerHTML= '';
        querySnapshot.forEach(async (doc) => {
        let postid = doc.id;
        let post = doc.data();
        containerDOM.appendChild(printPost(post, user, postid));
        });
      });
  } catch (e) {
      console.log(e);
  }
};

export const deletePost = async(id) =>{
  try {
    await data.collection('post').doc(id).delete();
  } catch (e) {
    console.log(e);
  }
};

const userInfo = async() =>{
  const users = []
  await data.collection('users').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            users.push({id: doc.id, name: doc.data().name, photo: doc.data().photo});
        });
      });
  return users;
};
