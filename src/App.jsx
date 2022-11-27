
import { React,useState } from 'react';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';
import searchimages from './api';
function App() {
  const[image,setImages]= useState([]);

  const handleSubmit = async(term) => {
    
    const result=await searchimages(term);
     setImages(result)
   


  }
  return (
    <div>
     

<SearchBar HandleSubmit={handleSubmit}/>
<ImageList ImgList={image}/>
    </div>
  )
}

export default App;