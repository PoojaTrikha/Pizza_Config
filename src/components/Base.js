import React, {Component} from 'react';
import {connect} from 'react-redux'
import {baseprice} from '../data'
import Bases from '../actions/Bases'
import '../styles/PizzaStyle.css'

class Base extends Component {

    constructor() {
        super()
        this.handleChange = this
            .handleChange
            .bind(this)

        this.state = {}
    }

 handleChange(event) {
 this.setState({id: event.target.key, name: event.target.title, price: event.target.value})
 this
     .props
     .Bases(event.target.title, event.target.value)
    }

    render() {
        return (
            <div>
                <label>Select your base</label>
                
                    <br/>
                    <table>
                        <thead>   
                                <th></th>
                                <th>SR.NO</th>
                                <th>Name</th>
                                <th>Price</th>
                           
                        </thead>
                        {baseprice.map(pizzabase => {
                            return (
                                <tbody>
                                    <tr key={pizzabase.id}>
                                        <td >
                                        <input value={pizzabase.price} name={'base'} type={'radio'} onChange={this.handleChange}/></td>
                                        <td>{pizzabase.id}</td>
                                        <td>{pizzabase.name}</td>
                                        <td>&euro; {pizzabase.price}</td>
                                    </tr>
                                </tbody>
                            )
                        })
}
                    </table>
                </div>
            
        )
    }
}

export default connect(null, {Bases})(Base)