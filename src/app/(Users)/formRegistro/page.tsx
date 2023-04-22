"use client";
//
import React from "react";

import { useState } from "react";

//
function FormRegistro() {
  //
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  // const handleSubmit = () => {
  //addDoc( {
  //name: name,
  // email: email,
  // message: message
  // })

  return (
    <>
      <div className="contact">
        <p className="contact_title"> Formulario de Contacto </p>

        <form className="contactform">
          {/*Nombre*/}
          <label>Nombre Completo: </label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={(event) => {
              setName();
            }}
          />

          {/*Correo*/}
          <label>Correo Electronico: </label>
          <input
            type="email"
            placeholder="Ingresa tu correo electronico"
            onChange={(event) => {
              setEmail();
            }}
          />

          {/*Feedback*/}
          <label>Ingresa tu consulta</label>
          <textarea
            type="text"
            placeholder="Ingresa tu consulta"
            onChange={(event) => {
              setMessage();
            }}
          ></textarea>
        </form>

        {/*Boton Enviar*/}
        <button className="contact_boton" onClick={handleSubmit}>
          ENVIAR
        </button>
      </div>
    </>
  );
}

export default FormRegistro;
