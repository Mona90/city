import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Details from './pages/Details';


function App() {
  
  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' index element={<Home/>}/>
         <Route path='details' element={<Details/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
