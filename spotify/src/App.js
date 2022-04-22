import logo from './logo.svg';
import './App.css';
import Login from './Pages/Landing';
import Searchbar from './Component/Searchbar';
import Home from './Pages/Home';
function App() {
  return (
    <div className='container'>
      <Login />
      <Home />
    </div>
  );
}

export default App;
