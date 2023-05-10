import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  //CONTROLADOR
  const [categories, setCategories] = useState(['Pelicula 1'])
 
  const onNewCategory=(onNewCategory)=>{
    
    if ( categories.includes(onNewCategory))return console.log('ya existe');
    setCategories([onNewCategory,...categories])
  }





  //VISTA
    return (
    <>
    <AddCategory onNewCategory={(e)=>onNewCategory(e)}  />
        <h1>GifExpertApp</h1>
       
          
            {
              categories.map(category =>
                 (
                  <GifGrid key={category} category={category} />
                 )
              )
            } 
          
           
             
           
       
       

        
    </>
  )
}
