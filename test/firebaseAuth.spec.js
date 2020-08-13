// importamos la funcion que vamos a testear
import { signUp, logIn, logInGoogle, recoverPass, signOut } from "../src/lib/index";

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
