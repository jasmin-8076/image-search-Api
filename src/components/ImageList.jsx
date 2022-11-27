import React from 'react'
import './ImageList.css'
import ImageShow from './ImageShow'
function ImageList({ImgList}) {

const renderedImages = ImgList.map((item)=> {
  return(
  <div key={item.id}> 
<ImageShow  image={item}/>

  </div>
   
  )
})


  return (
    <div className='image-list'>
     {renderedImages} 
    </div>
    
  )
}

export default ImageList