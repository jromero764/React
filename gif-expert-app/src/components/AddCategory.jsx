import {useState} from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [InputValue, setInputValue] = useState('');
    
    const handleInputValue=(e)=>{
        
       setInputValue(e.target.value);
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        
        //setCategories( categories => [...categories ,InputValue ]);
        onNewCategory(InputValue.trim());
        setInputValue('');
    }
    return (
    <>
    <form onSubmit={onSubmit}>
        <h3>AddCategory</h3>
        <input type="text" placeholder='Buscar' value={InputValue} onChange={handleInputValue}/>
    </form>
    
    </>
        
  )
}
