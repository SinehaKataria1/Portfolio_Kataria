import './App.css';
import Home from './Home';
import Navigation from './Navigation';
import { Link , Route , Switch , BrowserRouter} from 'react-router-dom';
import Routing from './Routing';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routing/>
    </BrowserRouter>
   
    </>
  );
}

export default App;
