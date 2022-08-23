import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages & comonents
import Home from './pages/Home';
import NavBar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <NavBar/>
          <Routes>
            <Route 
            path="/"
            element={<Home />}
            />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
