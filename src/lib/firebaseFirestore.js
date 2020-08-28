export const commentPublish = (comment, category, userID) => {
  try {
    var userDocRef = data.collection('users').doc(userID);
    userDocRef.collection('userComments').doc().set({
      comment,
      category,
      userID,
    });
  } catch (e) {
    console.log(e);
  }
};
