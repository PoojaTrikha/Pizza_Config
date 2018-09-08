import React, {Component} from 'react';
import './App.css';
import Base from './components/Base'
import Sauce from './components/Sauce'
import CheckBox from './components/CheckBox'
import TurboDroneDelivery from './components/TurboDroneDelivery'
import PizzaPrice from './components/PizzaPrice'


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to NewAgePizza</h1>
        <Base />
        <br />
        <Sauce />
        <br />
        <CheckBox />
        <br />
        <TurboDroneDelivery />
        <PizzaPrice />
        <br />
      </div>
    );
  }
}

export default App;
