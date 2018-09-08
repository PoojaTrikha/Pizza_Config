import {UPDATETOPPINGS} from './index'

export default function Toppings(selectedvalue) {

    return {type: UPDATETOPPINGS, payload: selectedvalue}

}