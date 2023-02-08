import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/homeScreen/HomeScreen';
import Favourite from './screens/favouriteScreen/Favourite';
import Recent from './screens/recentScreen/Recent';
import HomeDisplay from './screens/homedisplayScreen/HomeDisplay';

function App() {
  return (
    <div>

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomeScreen/>}>
      <Route path="/HomeDisplay" index element={<HomeDisplay/>}/>
      <Route path="/Favourite"  element={<Favourite/>}/>
      <Route path="/Recent" element={<Recent/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
    </div>
  
  
  );
}

export default App;
