// importamos la funciones firebase.auth que vamos a testear
import authmock from '../_mocks_/mock_auth.js';

import {
  signUp, logIn, logInGoogle, recoverPass, signOut,
} from '../src/lib/firebaseAuth.js';

global.auth = authmock();

describe('signUp', () => {
  it('debería ser una función', () => {
    expect(typeof signUp).toBe('function');
  });

  it('debería retornar email@email.com , contraseña1234', async () => {
    const newUser = await signUp('email@email.com', 'contraseña1234');
    expect(newUser).toBe('nuevo usuario email@email.com, contraseña1234');
  });

  it('debería retornar error;', async () => {
    const newUser = await signUp('email@emailcom', 'contraseña123');
    expect(newUser).toBe('error');
  });

  it('debería retornar error;', async () => {
    const newUser = await signUp('email@email.com', 'abc');
    expect(newUser).toBe('error');
  });
});

describe('logIn', () => {
  it('debería ser una función', () => {
    expect(typeof logIn).toBe('function');
  });
  it('debería retornar email@email.com , contraseña1234', async () => {
    const user = await logIn('email@email.com', 'contraseña1234');
    console.log(user);
    expect(user).toBe('usuario email@email.com, contraseña1234');
  });
});

describe('recoverPass', () => {
  it('debería ser una función', () => {
    expect(typeof recoverPass).toBe('function');
  });
  it('debería retornar Hemos enviado un email a email@email.com para cambiar la contraseña', async () => {
    const message = document.createElement('p');
    const recover = await recoverPass(message, 'email@email.com');
    expect(recover).toBe('Hemos enviado un email a email@email.com para cambiar la contraseña');
  });
});

describe('signOut', () => {
  it('debería ser una función', () => {
    expect(typeof signOut).toBe('function');
  });
  it('debería retornar Hemos enviado un email a email@email.com para cambiar la contraseña', async () => {
    const outUser = await signOut();
    expect(outUser).toBe(undefined);
  });
});
