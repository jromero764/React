import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif"
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {
  const [Images, setImages] = useState([]);
  const getImages = async ()=>{
    const NewImagen= await getGif(category);
    setImages(NewImagen);
  }
  useEffect(() => {
    getImages();
  },[])
 
  

  return (
    <>
        <h3>{category}</h3>
        
        <div className="card-grid">
          {
            Images.map((image)=>(
              <GifItem 
              key={image.id}
              {...image}
              />
            )
              
            )
          }
        </div >
    </>
  )
}
