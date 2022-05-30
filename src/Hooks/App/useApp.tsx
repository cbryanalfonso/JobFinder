import {firebase} from '@react-native-firebase/auth'
import { useLayoutEffect, useState } from 'react'
export const useApp = () => {
  const [user, setUser] = useState(false)

  useLayoutEffect(() => {
    const suscriber = firebase.auth().onAuthStateChanged(us => {
        if (us) {
            setUser(true)
        } else {
            setUser(false)
        }
    })
    return suscriber; 
  }, [])

  return{
      user,
  }
}
