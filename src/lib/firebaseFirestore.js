import {printPost} from './index.js';

export const commentPublish = (comment, category, userID) => {
  try {
    var userDocRef = data.collection('users').doc(userID);
    userDocRef.collection('userComments').doc().set({
      comment,
      category,
      userID,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    });
  } catch (e) {
    console.log(e);
  }
};

export const loadPost = (containerDOM) =>{
  try {
    data.collectionGroup('userComments').orderBy('date','desc').onSnapshot((querySnapshot) => {
      containerDOM.innerHTML= '';
      querySnapshot.forEach((doc) => {
        containerDOM.appendChild(printPost(doc.data()));
      });
    });
  } catch (e) {
      console.log(e);
  }
};

export const deletePost = async(id) =>{
  try {
    await data.collectionGroup('userComments').doc(id).dalete();
  } catch (e) {
    console.log(e);
  }
};
