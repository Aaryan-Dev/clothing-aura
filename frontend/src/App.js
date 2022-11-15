import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Allroutes from './Routes/Allroutes';
import { useLocation } from 'react-router-dom';
import HaveAquestion from './Components/PoductComponents/HaveAquestion';
function App() {
  const location=useLocation();
  return (
    <div className="App">
      {/* <Navbar /> */}
      {location.pathname === "/admin/dashboard" ? null : <Navbar />}
      {/* {location.pathname === "/admin/dashboard" ? null : <HaveAquestion />} */}
      
      <Allroutes />
    </div>
  );
}
export default App;

