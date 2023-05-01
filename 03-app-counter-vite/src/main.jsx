import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './componente';
import { CounterApp } from './CounterApp';
import './estilos.css';
import './bootstrap/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <App titulo='Formulario' />
    
    
</React.StrictMode>
);
