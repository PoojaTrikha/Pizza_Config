import React, {Component} from 'react';
import {connect} from 'react-redux'
import {toppings} from '../data'
import Toppings from '../actions/Toppings'


class CheckBox extends Component {
    constructor(props)
    {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            checkedtoppings: [],
            checked: false
        }

    }
    handleChange(event) {

        if (this.state.checkedtoppings.length >= 3) {
            event.target.checked = false
            alert("You have reached the limit of selecting 3 toppings")
        }

        if (event.target.checked === true) {
            this.setState({
                checkedtoppings: [
                    ...this.state.checkedtoppings,
                    event.target.value
                ],
                checked: event.target.checked
            })
        } else {
            const filterdarray = this.state.checkedtoppings
            .filter(eachtopping => eachtopping !== event.target.value)
            this.setState({checkedtoppings: filterdarray, checked: event.target.checked})

        }
 }
    handleSubmit(event) {
        event.preventDefault()
        this.props.Toppings(this.state.checkedtoppings)

    }
   render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Select your toppings maximum 3 allowed</label>
                    <div>
                        {toppings.map(pizzatopping => {
                            return (

                                <label>
                                    <input value={pizzatopping} type={'checkbox'} options={this.state.checkedvalue} onChange={this.handleChange}/>{pizzatopping}
                                </label>
                            )
                        })}
                    </div>
                    <button type="submit">Add Toppings</button>
                    
                </form>
            </div>
        )

    }
}

export default connect(null, {Toppings})(CheckBox)