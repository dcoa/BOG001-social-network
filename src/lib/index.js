export const printPost = (post) => {
  let newpost = document.createElement('div');
  newpost.setAttribute('class', 'card');
  newpost.innerHTML = post.comment;
  return newpost;
};
