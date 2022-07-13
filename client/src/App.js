import './App.css';
import { useAuth0 } from "@auth0/auth0-react"
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
