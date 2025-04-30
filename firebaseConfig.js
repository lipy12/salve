
// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-Auth.js";
// COLE AQUI SUAS INFORMAÇÕES DO BANCO DE DADOS DO FIREBASE 
/* 
  OBSERVE E VERIFIQUE SE POSSUI TODOS OS CAMPOS
*/
 
const firebaseConfig = {
    apiKey: "AIzaSyAs5XruF6Qa5w_E5nROJa72eflHHU8Ez84",
    authDomain: "gremio-maior-do-sul.firebaseapp.com",
    databaseURL: "https://gremio-maior-do-sul-default-rtdb.firebaseio.com",
    projectId: "gremio-maior-do-sul",
    storageBucket: "gremio-maior-do-sul.firebasestorage.app",
    messagingSenderId: "190754413374",
    appId: "1:190754413374:web:7948da4770eeaf7edd6a6f",
    measurementId: "G-Q9K2WYYGRR"

}
// Inicializa o app
const app = initializeApp(firebaseConfig);

// Inicializa e exporta o Firestore
const db = getFirestore(app);


const auth = getAuth(app);


export { db, app, auth };





//CADASTAR USUARIO

