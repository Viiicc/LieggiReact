import './App.css';
import Navbar from "./components/Navbar/NavBar"
import Home from "./Views/Home"
import About from "./Views/About"
import Categorias from "./Views/Categorias"
import  ItemDetailContainer  from "./containers/itemDetailContainer/ItemDetailContainer";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"



function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/About"  component={About}/>
          <Route path="/Categorias"  component={Categorias}/>
          <Route path="/detail/:id"  component={ItemDetailContainer}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;