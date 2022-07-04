import {firebase} from '@react-native-firebase/database';
import {useEffect, useState} from 'react';

interface Props{
    text: any
}

export const useCompany = () => {
  const companies = [] as any;
  const [value, setValue] = useState('');

  useEffect(() => {
    const data = getCompanies();
    return data;
  }, []);

  const handleOnChangeText = ({text}:any) => {
    console.log('com -> ', companies);
    console.log('text -> ', text);
    if(text === ""){
        console.log('nada en la busqueda');
        
    }else{
        if((companies).includes(text)){
            console.log('Hay algo parecido');  
        }else{
            console.log('Nada perro');
        }
    }
setValue(text)

  };

  const getCompanies = () => {
    firebase
      .database()
      .ref('Company')
      .orderByChild('companyName')
      .on('child_added', function (Data) {
        //setCompanies([...companies, Data.val().companyName]);
        companies.push(Data.val().companyName);
        console.log(Data.val());
      });
  };

  return {
    companies,
    value,
    handleOnChangeText,
  };
};
