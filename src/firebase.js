import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAS5kwOK1FFuHNCQTWNotF7MAuODMlTNs0",
    authDomain: "react-ecommerce-manuelgm.firebaseapp.com",
    projectId: "react-ecommerce-manuelgm",
    storageBucket: "react-ecommerce-manuelgm.appspot.com",
    messagingSenderId: "213419457308",
    appId: "1:213419457308:web:ef316a7be5aee655dd98d9"
};

//Hace que Firebase quede conectado a la app de la consola
const getApp = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    //Retorna el acceso al servicio firestore
    return firebase.firestore(getApp)
}
