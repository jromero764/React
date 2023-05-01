import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const App = ({titulo}) => {

const [ counter,setCounter ] = useState(0);

const handleAdd = ()=>{
  setCounter ( counter + 1);
  console.log('llega');
}

  return (
    //Permite enviar mucho codigo
    <> 
    <div className="row justify-content-center">
    <form className='col-3 border' action="">
      <h1 className='text-center'>{titulo}</h1> 
      {/* <input type="text" className='form-control mb-3'  />
      <input type="text" className='form-control mb-3' /> */}

      <div className="row justify-content-center">
        <input type="text" onClick={handleAdd} className="btn btn-primary w-25 mb-3" defaultValue='+1' />
      </div>
      <div className="row justify-content-center">
        <input type="text" className="btn btn-primary w-25 mb-3" defaultValue='-1' />
      </div>

    </form>
    </div>
    
      
    </>
  )
}
App.propTypes={
  titulo: PropTypes.string.isRequired
}
//rafc -> crea y expota automatico un componente
