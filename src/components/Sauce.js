import React, {Component} from 'react';
import {connect} from 'react-redux'
import {sauce} from '../data'
import GetSelectedSauce from '../actions/GetSelectedSauce'
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
            .GetSelectedSauce(event.target.title, event.target.value)
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
                        {sauce.map(sauce => {
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

export default connect(null, {GetSelectedSauce})(Sauce)