import React, {Component} from 'react';
import Base from './Base'
import Sauce from './Sauce'
import CheckBox from './CheckBox'
import {connect} from 'react-redux'
import Toppings from '../actions/Toppings'
import TurboDroneDelivery from './TurboDroneDelivery'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class PizzaForm extends Component{


render() {
    return (
        <MuiThemeProvider>
        <form className="container" >
            <Base/>
            <br/>
            <Sauce />
            <br/>
            <CheckBox  />
            <br/>
            <TurboDroneDelivery />
            <br/>
        </form>
         </MuiThemeProvider>
    )}
}

export default connect (null,{Toppings})(PizzaForm)