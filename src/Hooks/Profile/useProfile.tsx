import ImagePicker from 'react-native-image-crop-picker';
import {firebase} from '@react-native-firebase/storage';
import {firebase as auth} from '@react-native-firebase/auth';
import {useEffect, useRef, useState} from 'react';
import {firebase as db} from '@react-native-firebase/database';

interface PropsAboutMe {
  textoAboutMe: string;
}

interface PropsWorkExperience {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface PropsResult {
  jobTitle?: string;
  companyName?: string;
}

export const useProfile = () => {
  const usuarioActual: string = auth.auth().currentUser?.uid!;
  const [imagen, setImagen] = useState(auth.auth().currentUser?.photoURL);
  const [name, setName] = useState(auth.auth().currentUser?.displayName);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [updateAboutMe, setUpdateAboutMe] = useState(false);
  const [aboutMe, setAboutMe] = useState('');
  const [position, setPosition] = useState<PropsResult>({});
  const bottomSheetRef = useRef(null);
  const [showWorkExperience, setShowWorkExperience] = useState(false);

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
      .catch(err => {
        console.log(err);
      });
  };

  const aboutMeGetFirebase = () => {
    db.database()
      .ref(`/Usuarios/${usuarioActual}`)
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
        setAboutMe(snapshot.val().aboutMe);
        setPosition({jobTitle: snapshot.val().jobTitle, companyName: snapshot.val().companyName});
      });
  };

  const generateRandom = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result1 = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
      result1 += characters.charAt(
        Math.floor(Math.random() * charactersLength),
      );
    }
    return result1;
  };
  //
  const workExperienceMySelf = ({
    companyName,
    description,
    endDate,
    jobTitle,
    startDate,
  }: PropsWorkExperience) => {
    const ran = generateRandom();

    db.database()
      .ref(`/Company/${ran}`)
      .set({
        id: ran,
        companyName,
      })
      .then(() => {
        console.log('Subida correctamente');
      })
      .catch(err => {
        console.log(err);
      });

    db.database()
      .ref(`/Usuarios/${usuarioActual}`)
      .update({
        idCompany: ran,
        companyName,
        jobTitle,
        startDate,
        endDate,
        description,
      })
      .then(() => {
        console.log('Subida correctamente');
      })
      .catch(err => {
        console.log(err);
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
    bottomSheetRef,
    showWorkExperience,
    setShowWorkExperience,
    workExperienceMySelf,
    position,
  };
};
