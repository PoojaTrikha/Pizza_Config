import React, {Component} from 'react';
import {connect} from 'react-redux'
import TurboChecked from '../actions/TurboDelivery'


 class TurboDroneDelivery extends Component {

    constructor() {
        super()
        this.handleChange = this
            .handleChange
            .bind(this)
        this.state = {
            turbochecked: true
        }
    
    }
    
    handleChange(event) {

        this.setState(turbochecked => ({
            turbochecked: !this.state.turbochecked
        }))

       this.props.TurboChecked(this.state.turbochecked)
    }

    render() {

        return (
            <div>
                <label className="turbo-label">Turbo Drone, will cost extra 10%</label>
                <input type={'checkbox'} onChange={this.handleChange}/>
               

            </div>
        )
    }
}

export default connect (null,{TurboChecked})(TurboDroneDelivery)