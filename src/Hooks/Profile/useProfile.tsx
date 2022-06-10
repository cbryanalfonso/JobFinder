import ImagePicker from 'react-native-image-crop-picker';
import {firebase} from '@react-native-firebase/storage';
import {firebase as auth} from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';
import {firebase as db} from '@react-native-firebase/database';

interface PropsAboutMe {
  textoAboutMe: string;
}

export const useProfile = () => {
  const usuarioActual: string = auth.auth().currentUser?.uid!;
  const [imagen, setImagen] = useState(auth.auth().currentUser?.photoURL);
  const [name, setName] = useState(auth.auth().currentUser?.displayName);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [updateAboutMe, setUpdateAboutMe] = useState(false);
  const [aboutMe, setAboutMe] = useState('');

  useEffect(() => {
   const data = aboutMeGetFirebase();
   return data;
  }, []);

  function openCameraPhoto() {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        //setImagen(image.path);
        uploadPhoto(image.path);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const uploadPhoto = async (imagen: string) => {
    const reference = firebase.storage().ref('avatars').child(usuarioActual);
    await reference.putFile(imagen);

    const url = await firebase
      .storage()
      .ref(`avatars/${usuarioActual}`)
      .getDownloadURL();
    console.log(url);
    setImagen(url);

    db.database()
      .ref(`/Usuarios/${usuarioActual}`)
      .update({
        photoUrl: url,
      })
      .then(() => {
        console.log('Subida correctamente');
        auth.auth().currentUser?.updateProfile({
          photoURL: url,
        });
      })
      .catch(err => {
        console.log('Erorr .....', err);
      });
  };

  const aboutMeFirebase = ({textoAboutMe}: PropsAboutMe) => {
    db.database()
      .ref(`/Usuarios/${usuarioActual}`)
      .update({
        aboutMe: textoAboutMe,
      })
      .then(() => {
        console.log('Subida correctamente');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const aboutMeGetFirebase = () => {
    db.database()
    .ref(`/Usuarios/${usuarioActual}`)
    .on('value', snapshot => {
      console.log('User data: ', snapshot.val());
      setAboutMe(snapshot.val().aboutMe);
    });
  };
 

  return {
    openCameraPhoto,
    imagen,
    name,
    showAboutMe,
    setShowAboutMe,
    aboutMeFirebase,
    aboutMeGetFirebase,
    aboutMe,
  };
};
