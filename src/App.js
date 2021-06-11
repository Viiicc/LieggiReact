import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Catalogo from './components/catalogo';




class App extends Component {
  render () {
    return (
      <div>
        <NavBar/>
        <Catalogo subtitle={'Paciencia, ya va tomando forma'} />
      </div>
  
    );
  }
}

export default App;
