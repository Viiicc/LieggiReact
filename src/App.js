import React, {Component} from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import Catalogo from './components/catalogo';





class App extends Component {
  constructor(){
    super();

    this.state = {
      count: 0,
    };

  }
    handleCounterUp = () => {
      this.setState({count: this.state.count + 1})
    }
    handleCounterDown = () => {
      this.setState({count: this.state.count - 1})
    }
  
  render () {
    return (
      <div>
        <NavBar/>
        <Catalogo subtitle={'Paciencia, ya va tomando forma'} />
        <div className="counter-section">
          <h3>Contador:</h3>
          <p>{this.state.count}</p>
          <div className="btn-section">
            <Button onClick={this.handleCounterUp} primary>+</Button>
            <Button onClick={this.handleCounterDown} positive>-</Button>
          </div>
        </div>
      </div>
      
  
    );
  }
}

export default App;
