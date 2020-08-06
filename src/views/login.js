export default ()=>{
    const signin = document.createElement('div');
    signin.setAttribute('class', 'container');

    const login = document.createElement('section');
    login.setAttribute('id', 'login');
    login.innerHTML = `<img src="img/icon.png" alt="logo_image" class="logo"/>`;


    const input = document.createElement('form');
    input.setAttribute('class', 'input-container') ;
    input.innerHTML = `<input type="text" class="username" placeholder="User name o email">
          <br>
          <input type="text" class="username" placeholder="Contraseña">
          <p>¿Olvidaste tú contraseña? <a href="/recover">Click aquí</a></p>
          <button type="button" class="btn">ENTRAR</button>`;


    const createAccount = document.createElement('div');
    createAccount.setAttribute('class', 'createAccount');
    createAccount.innerHTML = `<p>¿Eres un usuario nuevo? <a href="/createAccount">Crea una cuenta</a></p>
                <p>o inglesa con</p>
                <img src="img/google.png" width="30" height="30" class="google">`;


    login.appendChild(input)
    login.appendChild(createAccount)
    signin.appendChild(login)
    return  signin;
  }
