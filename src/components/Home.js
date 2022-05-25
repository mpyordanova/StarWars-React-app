import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {

 const [formData, setFormData]= useState({
     search:'',
     type: 'person'
 })
 const handleChange= (event)=> {
     setFormData({formData,[event.target.name]:event.target.value}) //event.target.name is what we search from input name=search
 }                                                                   //formData is when we search something by category. THIS IS ALWAYS THE SAME FOR OTHER PROJECTS AS WELL.For any form we are changing
const handleSubmit = () => {

}
 
 
 
//  useState([])
//  const [userSearch, setUserSearch] = useState('')  
// const fetchData = async ()=>{
//     let response = await axios.get(`https://swapi.dev/api/people`)
//     setPerson(response.data.Search)
// }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='search'>Search people:</label>
            <input type='text' id='search' name='search' onChange={handleChange}/>   
            <input type="submit"/> {/*creates a button that says submit*/}

        </form>
    </div>
  );
}

export default Home