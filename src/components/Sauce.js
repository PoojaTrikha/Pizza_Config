import React, {Component} from 'react';
import {connect} from 'react-redux'
import {sauceprice} from '../data'
import Sauces from '../actions/Sauces'
import '../styles/PizzaStyle.css'

class Sauce extends Component {

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
            .Sauces(event.target.title, event.target.value)
    }

    render() {
        return (
            <div>
                <label className="sauce-label">Select the Sauce</label>
                <div>
                    <br/>
                    <table className="pizzaSauce">
                        <thead>
                                <th>Name</th>
                                <th>Price</th>
                        </thead>
                        {sauceprice.map(sauce => {
                            return (
                                <tbody>
                                    <tr key={sauce.id}>
                                        <td >
                                            <input
                                                key={sauce.id}
                                                value={sauce.price}
                                                title={sauce.name}
                                                name={'sauce'}
                                                type={'radio'}
                                                onChange={this.handleChange}/></td>

                                        <td>{sauce.id}</td>
                                        <td>{sauce.name}</td>
                                        <td>&euro; {sauce.price}</td>
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

export default connect(null, {Sauces})(Sauce)