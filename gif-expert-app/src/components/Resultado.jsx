import {useState} from 'react'

export const Resultado = ({contact}) => {

    const [contacto, setcontact] = useState('');

    setcontact(contact);
  return (
    <div>
        <textarea cols="30" rows="10">{contacto}</textarea>
        
    </div>
  )
}
