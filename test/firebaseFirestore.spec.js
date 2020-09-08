import MockFirebase from 'mock-cloud-firestore';

const data = {
  __collection__: {
    users: {
      __doc__: {
        nn123: {
          biography: 'Algo sobre tí',
          name: 'Usuario Desconocido',
          photo: '..img/user.png'
        },
        nn456: {
          biography: 'Qué buena onda chico',
          name: 'Crush',
          photo: '..img/user.png'
        }
      }
    },
    post: {
      __doc__: {
        n123n: {
          category: 'movie',
          comment: 'Ayer fue el dia de rayo mcqueen pero prefiero a mate',
          date: '7 de septiembre de 2020, 9:46:19 UTC-5',
          likes: [],
          userID: 'nn123'
        }
      }
    }
  }
};

import { userInfo, likePost, loadPost } from '../src/lib/firebaseFirestore.js';

global.firebase = new MockFirebase(data, {isNaiveSnapshotListenerEnabled: true});

global.data = firebase.firestore();

describe('userInfo', () => {

  it('debería retornar 2 usuarios', async () => {
    const post = await userInfo();
    console.log(post)
    expect(post.length).toBe(2);
  });
});

describe('likePost', () => {
  it('likes +', async () => {
    let currentUserId = 'nn123';
    let postId = 'n123n'
    let pushLike = true;
    let containerDOM = document.createElement('div');
    const post = await likePost(currentUserId, postId, pushLike);
    await loadPost(containerDOM)
    console.log(loadPost());
    expect().toBe(2);
  });

});
