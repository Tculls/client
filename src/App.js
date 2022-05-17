import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Dashboard from './views/Dashboard';
import Create from './views/Create';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Product Manager</h1>
      
      <Link to ="/">Product Dashboard</Link>
      <Link to ="/products">Add Product</Link>
      
      <Routes>
        <Route path="/products" element={<><Create /></>}/>
        <Route path="/" element={<Dashboard />}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
