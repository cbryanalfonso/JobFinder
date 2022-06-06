import {firebase} from '@react-native-firebase/auth';
import {firebase as db} from '@react-native-firebase/database';
import {Alert} from 'react-native';

interface Values {
  name: string;
  email: string;
  password: string;
}
interface Login {
  email: string;
  password: string;
}

export const useCommons = () => {
  const singUp = ({name, email, password}: Values) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('User account created & signed in!');
        var user = userCredential.user;
        user
          .updateProfile({
            displayName: name,
          })
          .then(() => {
            db.database()
              .ref(`/Usuarios/${user.uid}`)
              .set({
                name: name,
                email: email,
                password: password,
                uid: user.uid,
              })
              .then(() => {
                console.log('Lo que se sube a base de datos->');
              })
              .catch(error => {
                console.log(error);
              });
          })
          .catch(error => {
            Alert.alert(error);
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const login = ({email, password}: Login) => {
    if (email && password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('Sesión iniciada con exito :D');
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log('Try again!');
    }
  };

  return {
    singUp,
    login,
  };
};
