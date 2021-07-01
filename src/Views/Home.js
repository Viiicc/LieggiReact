import  NavBar from '../components/Navbar/NavBar';
import  ItemDetailContainer  from '../containers/itemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from "../containers/ItemListContainer/ItemListContainer";


function Home() {
  return (
    <div className="App">
     <div className="saludo"><h1>Bienvenido!</h1></div>
     <ItemListContainer/>
    </div>
    
  );
}

export default Home