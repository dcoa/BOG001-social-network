export default ()=>{
  //history.replaceState({},'recoverAccaunt', 'recover');
  const recover = document.createElement('section');
  recover.setAttribute('class', 'recover');

  recover.innerHTML = `<div class="cont">
      <h2>Recupera tu contraseña</h2>
      <label for="email">Ingresa tu email</label>
      <input type="email" id="email" placeholder="usuario@email.com" autocomplete="off" required>
      <button type="button" name="send" class="btn send" >ENVIAR</button>
      <p class="message"><p>
    </div>`

    const email = recover.querySelector('#email');
    const send = recover.querySelector('.send').addEventListener('click', ()=>{
      recover.querySelector('.message').style.display = 'block';
      recover.querySelector('.message').innerHTML = `Hemos enviado un email a ${email.value} para cambiar la contraseña`;
    })
    return recover;
}
