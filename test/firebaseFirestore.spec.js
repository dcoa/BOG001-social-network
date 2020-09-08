import MockFirebase from 'mock-cloud-firestore';

import { userInfo, likePost, loadPost } from '../src/lib/firebaseFirestore.js';

const data = {
  __collection__: {
    users: {
      __doc__: {
        nn123: {
          biography: 'Algo sobre tí',
          name: 'Usuario Desconocido',
          photo: '..img/user.png',
        },
        nn456: {
          biography: 'Qué buena onda chico',
          name: 'Crush',
          photo: '..img/user.png',
        },
      },
    },
    post: {
      __doc__: {
        n123n: {
          category: 'movie',
          comment: 'Ayer fue el dia de rayo mcqueen pero prefiero a mate',
          date: '7 de septiembre de 2020, 9:46:19 UTC-5',
          likes: [],
          userID: 'nn123',
        },
      },
    },
  },
};

global.firebase = new MockFirebase(data, { isNaiveSnapshotListenerEnabled: true });

global.data = firebase.firestore();

describe('userInfo', () => {
  it('debería retornar 2 usuarios', async () => {
    const users = await userInfo();
    expect(users).toHaveLength(2);
  });
});

describe('likePost', () => {
  it('likes +', async () => {
    const currentUserId = 'nn123';
    const postId = 'n123n';
    const pushLike = true;
    const printPost = data => containerDOM.innerHTML = data.data();
    let containerDOM = document.createElement('div');
    const post = await likePost(currentUserId, postId, pushLike);
    await loadPost(containerDOM);
    console.log(loadPost(containerDOM, printPost));
    expect().toBe(2);
  });
});
