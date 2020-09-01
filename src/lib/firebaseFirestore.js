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
      await data.collection('post').orderBy('date','desc').onSnapshot((querySnapshot) => {
        containerDOM.innerHTML= '';
        querySnapshot.forEach(async (doc) => {
        let postid = doc.id;
        let post = doc.data();
        const user =  await userInfo(post.userID);
        containerDOM.appendChild(printPost(post, user, postid));
        });
      });
  } catch (e) {
      console.log(e);
  }
};

export const currentUserPost =  async (containerDOM, user) =>{
  try {
      await data.collection('post').where("userID", "==", user.uid).orderBy('date','desc')
      .onSnapshot((querySnapshot) => {
        containerDOM.innerHTML= '';
        querySnapshot.forEach(async (doc) => {
        let postid = doc.id;
        let post = doc.data();
        const user =  await userInfo(post.userID);
        containerDOM.appendChild(printPost(post, user, postid));
        });
      });
  } catch (e) {
      console.log(e);
  }
};

export const deletePost = async(id) =>{
  try {
    await data.collection('post').doc(id).dalete();
  } catch (e) {
    console.log(e);
  }
};

const userInfo = async(userID) =>{
  const user = await data.collection('users').doc(userID).get()
  .then((doc) => {
    return doc.data();
  });
  return user;
};
