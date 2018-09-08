import React, {Component} from 'react';
import {connect} from 'react-redux'
import {toppings} from '../data'
import GetSelectedToppings from '../actions/GetSelectedToppings'
import RaiseButton from 'material-ui/RaisedButton'
const buttonStyle = {
    margin: 12
}

class CheckBox extends Component {
    constructor(props)
    {
        super(props)
        this.handleChange = this
            .handleChange
            .bind(this)
        this.state = {
            checkedtoppings: [],
            checked: false
        }

    }
    handleChange(event) {

        if (this.state.checkedtoppings.length >= 3) {
            event.target.checked = false
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
            const filterdarray = this
                .state
                .checkedtoppings
                .filter(eachtopping => eachtopping !== event.target.value)
            this.setState({checkedtoppings: filterdarray, checked: event.target.checked})

        }

    }

    handleSubmit(event) {
        event.preventDefault()
        this
            .props
            .GetSelectedToppings(this.state.checkedtoppings)

    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this
                    .handleSubmit
                    .bind(this)}>
                    <label className="base-label">Select your Toppings(Maximum 3 allowed!)</label>
                    <div>
                        <br/> {toppings.map(pizzatopping => {
                            return (

                                <label className="toppings-label" key={pizzatopping}>
                                    <input className="toppings-types"
                                        value={pizzatopping}
                                        type={'checkbox'}
                                        options={this.state.checkedvalue}
                                        onChange={this.handleChange}/>{pizzatopping}
                                </label>
                            )
                        })}
                    </div><br/>
                    <RaiseButton
                        type="submit"
                        label="Add Selected Toppings"
                        primary={true}
                        style={buttonStyle}/>
                </form>
            </div>
        )

    }
}

export default connect(null, {GetSelectedToppings})(CheckBox)