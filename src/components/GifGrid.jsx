import { useState, useEffect, use } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                { 
                images.map( ( image ) => (
                    <GiftItem 
                        key={image.id}
                        // title = {image.title}
                        // url={image.url}
                        {...image}

                    />      
                    )) 
                }
            </div>
            
        </>
    )


}
