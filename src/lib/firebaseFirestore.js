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
