import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Store from './views/Store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
