import {UPDATEBASE} from '../actions/index'
import {UPDATESAUCE} from '../actions/index'
import {UPDATETOPPINGS} from '../actions/index'
import {DELIVERY} from '../actions/index'

const initialState = {
    base: " ",
    sauce: " ",
    toppings:"",
    baseprice:" ",
    sauceprice:" ",
    turbodelivery:false
 

}

export default function (state = initialState, {type, payload}) {
 
    switch (type) {
        case UPDATEBASE:
            {

                return {
                    ...state,
                    base: payload.selectedbase,
                    baseprice:payload.price
                }
            }

        case UPDATESAUCE:
            {
                return {
                    ...state,
                    sauce: payload.selectedsauce,
                    sauceprice:payload.price
                }
            }

        case UPDATETOPPINGS:
            {
                return {
                    ...state,
                    toppings: payload,
                    
                }
            }

            case DELIVERY:
            {
                return{
                    ...state,
                    turbodelivery:payload
                }
            }
        default:
            return state
    }
}