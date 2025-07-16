import './App.css';
import Emptable from './components/Emptable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
    <div> Hi </div>
      <header className="App-header">
       <BrowserRouter>
          <Routes>
            <Route path='/emptable' element={<Emptable />} />           
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
