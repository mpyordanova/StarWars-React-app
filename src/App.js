import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Person from './components/Person'

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/person' element = {<Person />}/>
     </Routes>
    </div>
  );
}

export default App;
