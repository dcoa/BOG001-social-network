export default () => {
  const otherThank = document.createElement('div');
  otherThank.setAttribute('id', 'v404');
  const accountThank = document.createElement('section');
  accountThank.setAttribute('id', 'message404');
  accountThank.innerHTML = `<img src="img/error404.png" id="icono">
      <h1>Lo sentimos, la página que buscas no esta disponible</h1>
      `;


  otherThank.appendChild(accountThank);
  return otherThank;
};
