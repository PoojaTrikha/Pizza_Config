import {UPDATE_TOPPINGS} from './index'

export default function Toppings(selectedvalue) {

    return {type: UPDATE_TOPPINGS, payload: selectedvalue}

}