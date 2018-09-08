import React, {Component} from 'react';
import './App.css';
import Form from './components/Form'
import PizzaPrice from './components/PizzaPrice'
import './styles/PizzaStyle.css'
import logo from './image/pizza.jpg';

const pics = [logo];

class App extends Component {

  handleSubmit() {
    alert('Your order is successfully placed')
    window
      .location
      .reload()
  }

  render() {
    return (
      <div className="App">
        <img src={pics} alt =""/>
        <h1> New Age Pizza</h1>
        <h1 className="App-title">Welcome to NewAgePizza</h1>
        <Form/>
        <PizzaPrice/>
        <br/>
        <button className="submitbutton" onClick={this.handleSubmit}>PLACE ORDER</button>
      </div>
    );
  }
}

export default App;
