import {firebase} from '@react-native-firebase/database';
import {useEffect, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {firebase as st} from '@react-native-firebase/storage';
import {firebase as auth} from '@react-native-firebase/auth';
import {firebase as db} from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamListAuth } from '../navigations/exportNavigation';
interface Props {
  nameCompany: string;
  description: string;
  logo?: string;
  socialMedia?: string;
  webPage?: string;
}

interface Word {
  companyName: string;
  idCompany: string;
}

type navigationHeader = NativeStackNavigationProp<RootStackParamListAuth>;


export const useCompany = () => {

  const navigation = useNavigation<navigationHeader>();
  const [companiesArray, setCompaniesArray] = useState([]);
  const [companyResult, setCompanyResult] = useState<any>();
  const [companiesDB, setCompaniesDB] = useState([]);
  const companies = [] as any;
  const companiesResult = [] as any;
  const [value, setValue] = useState('');
  const usuarioActual: string = auth.auth().currentUser?.uid!;
  const [idRandom, setIdRandom] = useState('');
  const [image, setImage] = useState('');
  const [nameCompany, setNameCompany] = useState('');

  useEffect(() => {
    getCompanies()
  }, []);


  const handleOnChangeText = (text: string) => {
    if (text === '') {
      console.log('nada en la busqueda');

      console.log(companiesArray);
    } else {
      //console.log(text);
      //console.log(companiesArray);
      const search = companiesArray.filter((word: Word ) => 
        word.companyName.toLowerCase().indexOf(text.toLowerCase())> -1
        )
        setCompaniesDB(search);
    }
    setValue(text);
  };

  const getCompanies = () => {
    firebase
      .database()
      .ref('Company')
      .orderByChild('companyName')
      .on('child_added', function (Data) {
        //setCompanies([...companies, Data.val().companyName]);
        //setCompaniesDB(companies.concat(Data.val()))
        companies.push(Data.val());
        //console.log(Data.val());
      });

    setCompaniesArray(companies);
  };

  /***
   *
   *  FUNCTION UPLOAD IMAGES
   *
   */

  function openCameraPhoto() {
    //setIdRandom(generateRandom())
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

  const uploadPhoto = async (imagen: string) => {
  const ran = generateRandom();
  //console.log(ran);
  setIdRandom(ran)
  

    const reference = st.storage().ref('companyLogo').child(ran);
    await reference.putFile(imagen);

    const url = await st
      .storage()
      .ref(`companyLogo/${ran}`)
      .getDownloadURL();
   // console.log(url);
    setImage(url);

  };

  const registerNewCompany = ({
    description,
    nameCompany,
    logo,
    socialMedia,
    webPage,
  }: Props) => {
   if((description || nameCompany || logo || socialMedia || webPage )){

    db.database()
      .ref(`/Company/${idRandom}`)
      .set({
        id: idRandom,
        companyName: nameCompany,
        logo: image,
        socialMedia,
        webPage,
      })
      .then(() => {
        console.log('Subida correctamente');
        Alert.alert('Empresa registrada correctamente.');
        navigation.navigate('HomeCompany');
      })
      .catch(err => {
        console.log(err);
      });
    /* firestore()
    .collection('Company')
    .add({
      name: nameCompany,
      description,
      logo,
      socialMedia,
      webPage,
    })
    .then(() => {
      console.log('Company Register ... ');
    })
    .catch(err => {
      console.log('Error', err);
    }); */
   }else{
     Alert.alert('Faltan valores perro ... ', idRandom)
   }
  };

  return {
    companies,
    value,
    handleOnChangeText,
    companiesArray,
    openCameraPhoto,
    registerNewCompany,
    companyResult,
    companiesDB,
    image,
    nameCompany,
    setNameCompany,
  };
};
