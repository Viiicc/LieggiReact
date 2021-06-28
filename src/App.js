import './App.css';
import  NavBar from './components/Navbar/NavBar';
import { ItemListContainer } from "./containers/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer/>
    </div>
  );
}

export default App;