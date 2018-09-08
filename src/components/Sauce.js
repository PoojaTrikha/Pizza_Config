import React, {Component} from 'react';
import {connect} from 'react-redux'
import {sauceprice} from '../data'
import Sauces from '../actions/Sauces'


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
                <label className="sauce-label">Select the Sauce  from the list</label>
                <div>
                    <br/>
                    <table className="pizzaSauce">
                        <thead>   
                                <th></th>
                                <th>SR.No</th>
                                <th>Name</th>
                                <th>Price</th>
                        </thead>
                        {sauceprice.map(sauce => {
                            return (
                                <tbody>
                                      <td >
                                        <input value={sauce.price} title={sauce.name} name={'sauce'} type={'radio'} onChange={this.handleChange}/></td>
                                        <td>{sauce.id}</td>
                                        <td>{sauce.name}</td>
                                        <td>&euro; {sauce.price}</td>
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