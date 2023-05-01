import React from 'react';
import PropType from 'prop-types';

export const CounterApp = ({id,Nombre,Apellido,Telefono}) => {
  return (
    <>
    <div className="row justify-content-center">
      <div className="col-2 ">
      <form className='borde-rojo'>
        <h1>{id}</h1>
        <input type="text" id='Nombre' className='form-control'  />
        <br />
        <input type="text" id='Apellido' className='form-control'  />
        <br />
        <input type="text" id='Telefono' className='form-control'  />
        <br />
        <div className="row justify-content-center">
          <input type='button'  className='btn btn-primary w-50 mb-2' value='Guardar' />
        </div>
        
    </form>
      </div>
    
    </div>
    
    </>
    
  )
}
CounterApp.prototype={
Nombre:PropType.string.isRequired,
Apellido:PropType.string.isRequired,
Telefono:PropType.number.isRequired,
}

