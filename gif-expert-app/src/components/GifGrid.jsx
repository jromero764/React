import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif"
import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";


export const GifGrid = ({category}) => {
 const {Images,isLoading} = useFetchGif({category});
 console.log({Images,isLoading});
  

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading ? <h2>Cargando...</h2>
          :null 
        }
        
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
