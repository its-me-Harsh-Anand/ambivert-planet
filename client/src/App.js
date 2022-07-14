import './App.css';
import { useAuth0 } from "@auth0/auth0-react"
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import ProtectedButton from './components/ProtectedButton';

function App() {
  const { isLoading } = useAuth0();
  // use this feature of loading on signin, signup, api buttons and make it dissable until isLoading becomes false
  if (isLoading) {
    return <Loading />;
  }
  
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        
        {/* this is a protected route with the feature of auth0 */}
        <Route path= '/protected' element={<ProtectedButton />}/>  
      </Routes>
    </div>
  );
}

export default App;
