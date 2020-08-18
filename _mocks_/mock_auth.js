const auth = {
    createUserWithEmailAndPassword: (email, password) => {
      const emailChar = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      const passChar = /^.{6,}$/;
      return new Promise ((resolve, reject) => {
        const user = {
          email: email,
          password: password
        };
        if (emailChar.test(email) && passChar.test(password)) {
          user.email;
          user.password;
        } else {
           reject('error');
        };

        resolve(`nuevo usuario ${user.email}, ${user.password}`);
      })
    },
    signInWithEmailAndPassword: (email, password) => {
      return new Promise ((resolve, reject) => {
        resolve(`usuario ${email}, ${password}`);
        reject('error')
      })
    },
    sendPasswordResetEmail: (email) => {
      return new Promise ((resolve, reject) => {
        resolve(email);
        reject('error');
      })
    },
    signOut: () => {
      return new Promise ((resolve, reject) => {
        resolve();
        reject('error');
      })
    }
}

export default jest.fn(() => {
  return auth;
})
