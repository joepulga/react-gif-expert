import React from 'react'
import PropTypes from "prop-types";


export const GiftItem = ({title, url}) => {

    // console.log({title,url})
  return (
     <div className='card'>
        <img src={url} alt={title} />
        <p>{ title}</p>
     </div>
  )
}

GiftItem.PropTypes = {

   title: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
}
/*
   Tarea
   1. Añadir PropTypes
      a. title: obligatorio
      b. url obligatorio
   
   2. Evaluar el snapshot

*/