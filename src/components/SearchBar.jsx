import React, { useState } from 'react'

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
    <div>

  <form onSubmit={handleFormSubmit}>
  <input value={term} onChange={handleChange} />
  
  </form>


    </div>
  )

  }
export default SearchBar