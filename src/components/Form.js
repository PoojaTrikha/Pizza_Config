import React, {Component} from 'react';
import Base from './Base'
import Sauce from './Sauce'
import CheckBox from './CheckBox'
import {connect} from 'react-redux'
import Toppings from '../actions/Toppings'
import TurboDroneDelivery from './TurboDroneDelivery'


class PizzaForm extends Component{


render() {
    return (
        <form>
            <Base/>
            <br/>
            <Sauce />
            <br/>
            <CheckBox  />
            <br/>
            <TurboDroneDelivery />
            <br/>
        </form>
        
    )}
}

export default connect (null,{Toppings})(PizzaForm)