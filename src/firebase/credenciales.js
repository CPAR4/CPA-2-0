// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyD2G9_s2J34qBAdcmKuXGXUafb5KgCQGnw",
  authDomain: "web-cpa-2-0.firebaseapp.com",
  databaseURL: "https://web-cpa-2-0-default-rtdb.firebaseio.com/",
  projectId: "web-cpa-2-0",
  storageBucket: "web-cpa-2-0.appspot.com",
  messagingSenderId: "290652404952",
  appId: "1:290652404952:web:ac56d4d927f12eacc12bad"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);

// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
