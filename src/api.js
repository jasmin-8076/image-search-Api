import axios from "axios";

const searchimages=async(term) => {

 const response=  await axios.get('https://api.unsplash.com/search/photos',{

    headers:{
    Authorization: 'Client-ID CYn9YGeDuuY1D0kHd3mooO8DCYegrA1g05-Hee4QLbc',
   

    },

  params: {
    query: term
  }
    });
    // console.log(response);
     return response.data.results;
};

export default searchimages;