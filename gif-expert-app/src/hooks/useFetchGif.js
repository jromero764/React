import { useState,useEffect } from "react";
import { getGif } from "../helpers/getGif";


export const useFetchGif = ({category}) => {
  
    const [Images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    const getImages = async ()=>{
      const NewImagen= await getGif({category});
      setImages(NewImagen);
      setisLoading(false);
    }
    useEffect(() => {
      getImages();
    },[])

  return {
    Images,
    isLoading,
    
  }
}
