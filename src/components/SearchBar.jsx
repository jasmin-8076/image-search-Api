import React, { useState } from 'react'
import './Searchbar.css';
function SearchBar({HandleSubmit}) {

const[term,setTerm]=useState('');

const handleFormSubmit = (event) =>{
    event.preventDefault();
  
     HandleSubmit(term)
    
}


const handleChange= (event) => {
   setTerm(event.target.value)
}
// console.log(term);
  return (
    <div className='search-bar'>

  <form onSubmit={handleFormSubmit}>
    <label>enter search term</label>
  <input value={term} onChange={handleChange} />
  
  </form>


    </div>
  )

  }
export default SearchBar