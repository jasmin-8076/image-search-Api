import React from 'react';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';
import searchimages from './api';
function App() {

  const handleSubmit = async(term) => {
    
    const result=await searchimages(term);

    console.log(result);


  }
  return (
    <div>
     

<SearchBar HandleSubmit={handleSubmit}/>

    </div>
  )
}

export default App;