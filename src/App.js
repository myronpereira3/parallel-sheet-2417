
import './App.css';
import { Button } from 'react-bootstrap';
import BasicExample from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './Components/Landing';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">    
    <AllRoutes/>
    </div>
  );
}

export default App;
