import React, {Component} from 'react';
import Base from './Base'
import Sauce from './Sauce'
import CheckBox from './CheckBox'
import {connect} from 'react-redux'
import GetSelectedToppings from '../actions/GetSelectedToppings'
import TurboDrone from './TurboDrone'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class PizzaForm extends Component{


render() {
    return (
        <MuiThemeProvider>
        <form className="container" >
            <h3>Select your Pizza!!!!</h3>
            <br/>
           
            <Base/>
            <br/>
            <Sauce />
            <br/>
            <CheckBox  />
            <br/>
            <TurboDrone />
            <br/>
        </form>
         </MuiThemeProvider>
    )}
}

export default connect (null,{GetSelectedToppings})(PizzaForm)