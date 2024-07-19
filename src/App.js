
import './App.css';

import { BrowserRouter } from "react-router-dom";
import Pagemain from './Pages/Pagemain/Pagemain';

function App() {
  return (
    <>
     <BrowserRouter>
      <Pagemain />
    </BrowserRouter>
    
    </>
  )
}

export default App