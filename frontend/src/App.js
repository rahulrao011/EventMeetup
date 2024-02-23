import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/pathHere" element={<Home />}/>
            <Route path="/test" element={<Home />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;