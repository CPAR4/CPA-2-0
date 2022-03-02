import React, { useState } from "react";
import '../App.css';
import Logo from "../img/LogoCPA.png"

import firebaseApp from "../firebase/credenciales";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const auth = getAuth(firebaseApp);

function Login() {
  const firestore = getFirestore(firebaseApp);
  const [isRegistrando, setIsRegistrando] = useState(false);

  async function registrarUsuario(email, password, rol) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });

    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, { email: email, rol: rol });
  }

  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;


    if (isRegistrando) {
      // registrar
      registrarUsuario(email, password, rol);
    } else {
      // login
      signInWithEmailAndPassword(auth, email, password);
    }
  }
    
  return <section className="AllConteiner"> 
  <section className="Conteiner">
      <div className="Logo">
          <img src={Logo}></img>
      </div>
      <hr className="Line"></hr>
      <div className="Datos">
      <h1>
          { isRegistrando ? "Registrate" : "Bienvenid@ Enlce"}
      </h1>
      <form onSubmit={submitHandler}>
          <input id="email" type="email" placeholder="Email"/>
          <input id="password" type="password" placeholder="ID USUARIO"/>
          <label className="Rol">
              Puesto
          </label>
          <select className="Rol-Select" id="rol">
                    <option value="admin">Coordinador Regional</option>
                    <option value="user">Enlace Municipal</option>
                </select>
        <div>
      <input className="Iniciar"  type="submit" value={isRegistrando ? "Registrar" : "Iniciar Sesion"}/>
      </div>
      </form>
      <div>
     { /* <button onClick={() => setIsRegistrando(!isRegistrando)}>
          {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
      </button>  */ }
      </div>
      </div>
  </section>

  </section>
}

export default Login;
