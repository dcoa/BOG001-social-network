export default () => {
  const home = document.createElement('section');
  home.setAttribute('class', 'home');
  home.innerHTML = `<p class= "welcome"> Bienvenido a la comunidad más grande de amantes de series y películas
        <span>Ingresar</span></p>`;

  home.addEventListener('click', () => {
    window.location = '#login';
  });

  return home;
};

/* `<div class="home">
  <p class="welcome">Welcome to the largest community of series and movies lovers</p>
</div>` */
