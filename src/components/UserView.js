import { doc } from 'firebase/firestore';
import React from 'react';
import Logo from "../img/LogoCPA.png";
import './UserView.css';

import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

function UserView() {
  return <section>
  <nav class="navbar navbar-light bg-light">
  <div class="container-nav container-fluid">
    <a class="Logo-Nav navbar-brand">
     <img src={Logo}></img>
       R4 | Coordinador Municipal
       </a>
       <div>
       <nav class="justify-content-center">
       <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-inicio-tab" data-bs-toggle="pill" data-bs-target="#pills-inicio" type="button" role="tab" aria-controls="pills-inicio" aria-selected="true">Inicio <span class="badge bg-success">Revisa las novedades</span></button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="pills-BaseDatos-tab" data-bs-toggle="pill" data-bs-target="#pills-BaseDatos" type="button" role="tab" aria-controls="pills-BaseDatos" aria-selected="false">Bases de datos</button>
    </li>
      <li class="nav-item disabled" role="presentation">
    <button class="nav-link disabled" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Disabled <span class="badge rounded-pill bg-danger">IN PROCESS</span></button>
    </li>
  </ul>
       </nav>
       </div>
      <form class="d-flex">
        <button class="btn btn-outline-danger" onClick={() => signOut(auth)} type="submit">Cerrar Sesión</button>
      </form>
      </div>
    </nav>
  <section>
  <div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-inicio" role="tabpanel" aria-labelledby="pills-inicio-tab">
    <div class="Inicio">
      <center class="Inicio-Cont">
      <img class="Logo-Inicio" src={Logo}></img>
      <h1>#DondeLaMagiaSucede</h1>
    </center>      
    </div>
    <section class="Acordeon-Inicio">
      <div>
        <h1>
          - Bienvenid@ a este nuevo espacio -
        </h1>
      </div>
    <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        ¿Qué es esto? 🤔
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
      <strong> Te damos la bienvenida a la pagina web de Cabello Para el Alma </strong> . Aquí podras encontrar varias herramientas que te seran de utilidad durante tu coordinación municipal en <strong> Cabello para el Alma </strong>, una de las principales herramientas que tendras a tu disposición es la sección <strong> BASES DE DATOS </strong>, como podras suponer aquí se encontraran todas las bases de datos disponibles en la asociación para que las llenes y así evitaremos tener muchos documentos de excel en nuestros discos duros, ahorrando espacio y tiempo.
      A manera de recomendación y para una mejor experiencia te mencionamos que es mejor utilizar la plataforma en una <strong> Computadora </strong>, aunque la funcionalidad de la plataforma no se vera afectada de ninguna manera, la sección estetica (imagenes, textos, etc.) si estara afectada, notandose imagenes muy grandes, textos cortados por la mitad entre otros errores visuales.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        ¿Quien tiene acceso a esta plataforma? 🤨
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong> Solo enlaces municipales, coordinador regional y administrativos de Cabello para el Alma. </strong> El uso de la plataforma esta limitado para que solo ustedes puedan entrar, tanto es así que para acceder a las bases de datos y su contenido se necesita anteriormente haber iniciado sesión con un correo electronico y ID de Usuario autorizado por el coordiandor regional, de no contar con estos datos o no haber sido autorizado no podras acceder a las bases de datos lo cual sí es una ventaja para mantener la seguridad de la asociación, por lo que te pedimos que no compartas tu correo y contraseña con nadie.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <strong> NOTAS DE ACTUALIZACIÓN </strong> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong class="Strong-Act"> ¡CAMBIOS IMPORTANTES! </strong> La versión <strong>2.0</strong> de la plataforma digital de <strong>Cabello Para el Alma</strong> teiene las siguientes novedades:
        <p></p>
        <dl>
         <lu> <strong>Generales</strong> 
          <li>Se agrego la funcionalidad <strong>ROLES</strong>, esto permite definir roles <strong> "Coordinador Regional" y "Enlace Municipal", </strong> cada uno con funciones y privilegios distintos. <span class="badge rounded-pill bg-success">Nuevo (Versión 2.0)</span></li>
          <li>Se removieron la secciones de "Eventos" y "Archivos" ya que se piensa dar una mejora funcional y estetica a las secciones antes mencionadas. <span class="badge rounded-pill bg-warning text-dark">Versión 1.0</span></li>
          <li>Por favor ayudanos reportando todos los errores que encuentres al siguiente <a href='mailto:r4cabelloparaelalma@gmail.com'> E-mail </a> ó <a href='https://wa.me/524613131326'> Whatsapp </a> agregando una captura y descripción del error. <span class="badge rounded-pill bg-warning text-dark">Versión 1.0</span></li>
          <li>Se agregaron animaciones en pequeñas partes de la plataforma para hacerla mas agradable a la vista, estas animaciones no afectan a la funcionalidad de ningun apartado <span class="badge rounded-pill bg-warning text-dark">Versión 1.0</span></li>
         </lu>
         <br></br>
         <lu><strong>Inicio de sesión</strong>
         <p>Solo existe un cambio en esta sección, todo lo demas sigue igual a la version 1.0</p>
         <li>Notaras el apartado <strong>Puesto</strong>, te permite seleccionar entre los 2 puestos disponibles en <strong> Cabello Para el Alma </strong> pero es necesario mencionar lo siguiente <span class="badge rounded-pill bg-success">Nuevo (Versión 2.0)</span>
         <ul>
           <li type="circle">
             Si fuiste dado de alta con un rol de coordiandor o enlace es <strong>IMPOSIBLE</strong> que al seleccionar un rol distinto accedas a las fuincionalidades exclusivas de ese rol.
             <br></br>
             Por ejemplo: Si fuiste dado de alta con un rol de <strong>Enlace Municipal</strong> y en el inicio de sesión seleccionas el puesto <strong>Coordinador Regional</strong>, el sistema detectara el rol que se te signo desde que fusite registrado y te dirigira a la pagina que te corresponde.
             <br></br>
             El sistema esta diseñado para evitar cualquier tipo de violación al inicio de sesión, de igual forma puedes corroborar tu rol asignado en la barra de navegación que esta en la parte superior de esta plataforma, notaras que se muestra lo siguiente:
             <ul>
               <li>
                  <strong> R4 | Coordinador Regional </strong> si el rol que te fue asignado es <strong>Regional</strong>.
               </li>
               <li>
                 <strong>R4 | Enlace Municipal</strong> si el rol que te fue asignado es <strong>Enlace</strong>.
               </li>
             </ul>
           </li>
         </ul>
         </li>
         </lu>
         <br></br>
         <lu>
           <strong>Bases de datos</strong>
           <p>Anteriormente existia un problema en la antigua version (<span class="badge rounded-pill bg-warning text-dark">1.0</span>) esto abarcaba <strong>TODAS</strong> las bases de datos, este problema hacia que al querer editar un registo algunos datos aparecieran con <strong>NaN</strong>, obliganddo al enlace a volver a introducir los datos del registro que en ese momento estaba editando,
           durante el desarollo de esta nueva versión (<span class="badge rounded-pill bg-success">2.0</span>) este error fue corregido, por lo que ahora cualquier registro que se quiera editar aparecera con sus datos completos tal cual el enlace o coordiandor regional los haya introducido.</p>
           Solo existen dos modificaciones, la 1ra es la redactada arriba y la 2da es laa siguiente modificación que en la versión <span class="badge rounded-pill bg-warning text-dark">1.0</span> solo estaba en prueba.
           <li>
            Se agrego la base de datos <strong> Enlaces </strong>, en esta se muestra el estatus de los enlaces y solo puede ser modificada por los administrativos y coordinadores regionales. <span class="badge rounded-pill bg-success">Nuevo (Versión 2.0)</span>
            <ul>
              <li>
                Estatus <strong><span class="Activ-Stat badge rounded-pill bg-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/></svg></span> ACTIVO</strong>; hace referencia a que el enlace se encuentra trabajando de una manera optima en la asociación, mostrando un buen desempeño.
              </li>
              <li>
              Estatus <strong> <span class="Riesg-Stat badge bg-warning"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg></span> EN RIESGO</strong>; nos muestra que el enlace a tenido problemas para desempeñar su labor asignada y se encuentra en riesgo de ser cambiado, si no mejora su desempeño pasara al estatus <strong> DESACTIVADO. </strong>
              </li>
              <li>
              Estatus <strong><span class="Desac-Stat badge bg-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></span>  DESACTIVADO </strong>; nos dice que el enlace de X municipio fue desactivado y se espera a alguien que pueda tomar el puesto para seguir con las actividades de la asociación.
              </li>
              <li>
              Estatus <strong><span class="Alta-Stat badge bg-info text-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/></svg></span>PROCESO DE ALTA </strong>; solo se muestra cuando un enlace esta siendo dado de alta en la asocación, una vez pase al estado ACTIVO se le permitira empezar a desarrollar sus actividades.
              </li>
            </ul>
           </li>
         </lu>
        </dl>
      </div>
    </div>
  </div>
</div>
    </section>
  </div>
  <div class="tab-pane fade" id="pills-BaseDatos" role="tabpanel" aria-labelledby="pills-BaseDatos-tab">
    <section class="DataBase-NAV">
    <div class="Bases"> 
      <iframe src='https://5x1bntczlms8ulvxockkdg-on.drv.tw/CPA-2.0/Municipales/'>
      </iframe>
    </div>
    </section>
  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div>
  </section>
  </section>
}

export default UserView;
