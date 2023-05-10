import React, { useState } from 'react';
import {Resultado} from './Resultado';

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSaveClick = () => {
    const contact = {
      firstName,
      lastName,
      phone
    };
    console.log(contact); // Muestra los valores en consola
    return contact;
  };

  return (
    <>
    <div>
      <label htmlFor="firstName">Nombre:</label>
      <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

      <label htmlFor="lastName">Apellido:</label>
      <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />

      <label htmlFor="phone">Teléfono:</label>
      <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

      <button onClick={handleSaveClick}>Guardar</button>
    </div>
    <Resultado contact={contact} />

    </>
    
  );
}

export default ContactForm;
