import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const App = ({titulo}) => {
//LOGICA del componente-------------------------------------------------------------------------------------------------------------------->

const [ counter, setCounter ] = useState();
const handleAdd = ()=>{
 setCounter(counter + 1);
}
const handleSub = ()=>{
  setCounter(counter - 1);
 }
//VISTA del componente-------------------------------------------------------------------------------------------------------------------->
  return (
   
    <> 
    <div className="row justify-content-center">
    <form className='col-3 border' action="">
      <h1 className='text-center'>{counter}</h1> 
      <div className="row justify-content-center">
        <input type="text" onClick={handleAdd} className="btn btn-primary w-25 mb-3" defaultValue='+1' />
      </div>
      <div className="row justify-content-center">
        <input type="text" onClick={handleSub} className="btn btn-primary w-25 mb-3" defaultValue='-1' />
      </div>

    </form>
    </div>
    
      
    </>
  )
}

//rafc -> crea y expota automatico un componente
//const [ counter,setCounter ] = useState(0);