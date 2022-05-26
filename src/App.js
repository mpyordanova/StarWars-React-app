import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home'
import Person from './components/Person'
import { useState } from 'react'
import axios from 'axios'
import Planet from './components/Planet';

import logo from './Logo.svg.png';


function App() {

  const navigate = useNavigate()

  const [apiResponse, setApiResponse] = useState({});

  const [formData, setFormData] = useState({
    search: "",
    type: "people"
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get(`https://swapi.dev/api/${formData.type}/?search=${formData.search}`)
      setApiResponse(response.data)
      navigate(`/${formData.type}`)
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  

  return (
    <div className="App">
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         </header>
    </div>
      <Routes>
        <Route path='/' element={<Home handleSubmit={handleSubmit} handleChange={handleChange} />} />
        <Route path='/people' element={<Person apiResponse={apiResponse} />} />
        <Route path='/planets' element={<Planet apiResponse={apiResponse}/>} />
      </Routes>
    </div>
  );
}

export default App;