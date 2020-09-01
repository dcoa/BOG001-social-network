export const printPost = (post, user, postid) => {
    const card= document.createElement('section')
    card.setAttribute('id', postid)
    card.setAttribute('class', 'newsfeed');
    card.innerHTML = `<div class="card">
        <div class="content">
        <div class="header">
          <img class="profile-pic" src="${user.photo}"/>
            <div class="detail">
            <p class="name">${user.name}</p>
            <p class="posted">2 hours ago</p>
          </div>
          <div class="categories"></div>
        </div>
        <div class="desc">
          ${post.comment}
        </div></div></div>`;


    const icons = document.createElement('section')
    icons.setAttribute('class', 'input-comment');
    icons.innerHTML = `<div class="icons"><img src="img/delete.png" id="delete" width="20px"/><img src="img/like.png" class="likes" width="20px"/>
    <img src="img/comment.png" class="commentaries" width="20px""/>
    <div id="confirm">
    <h2>¿Estás seguro que quieres eliminar la publicación?</h2>
    <button type="submit" class="btn" id="deleteBtn">ELIMINAR</button>
    </div>
    </div>
    <div class="inputCommentandButton">
    <textarea class="inputComment" id="comment" cols="40" rows="2" required placeholder="Escribe tu comentario aquí"></textarea>
    <button type="submit" class="btnCommentaries">Enviar</button>
    </div>`;
    const deletebtn = icons.querySelector('#delete');
    if(window.location.hash == '#timeline'){
      deletebtn.style.display = 'none';
    }

    const comments = document.createElement('section')
    comments.setAttribute('class', 'newsfeed');
    comments.innerHTML = `
    <div class="comments">
        <div class="content">
          <div class="detail">
            </div>
        </div>
        <div class="desc">
        "" </div></div>`;

    card.appendChild(icons);
    card.appendChild(comments);



    icons.querySelector('.commentaries').addEventListener('click', () => {
    icons.querySelector('.inputCommentandButton').style.display = "block";
    });


    return card;
  };

  /*<div id="confirm">
  <h2>¿Estás seguro que quieres eliminar la publicación?</h2>
  <button type="submit" class="btn" id="deleteBtn">ELIMINAR</button>
  </div>*/
