import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCdza3dAqzog4XTUf53Lz_o9xDPFJDvMCw",
  authDomain: "ex3-produits-aef0e.firebaseapp.com",
  projectId: "ex3-produits-aef0e",
  storageBucket: "ex3-produits-aef0e.appspot.com",
  messagingSenderId: "652978357282",
  appId: "1:652978357282:web:17d364f5abe5a61eb6f67b"
};

// Initialiser Firebase

if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore testtttttttttttt
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;