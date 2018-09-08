import React, {Component} from 'react';
import {connect} from 'react-redux'
import {base} from '../data'
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
                <div>
                    <br/>
                    <table>
                        <thead>
                                <th>Name</th>
                                <th>Price</th>
                           
                        </thead>
                        {base.map(pizzabase => {
                            return (
                                <tbody>
                                    <tr key={pizzabase.id}>
                                        <td >
                                            <input
                                                key={pizzabase.id}
                                                value={pizzabase.price}
                                                title={pizzabase.name}
                                                name={'base'}
                                                type={'radio'}
                                                onChange={this.handleChange}/></td>
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
            </div>
        )
    }
}

export default connect(null, {Bases})(Base)