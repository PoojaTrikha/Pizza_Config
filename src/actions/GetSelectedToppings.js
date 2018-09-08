import {UPDATE_TOPPINGS} from './index'

export default function GetSelectedToppings(selectedvalue) {

    return {type: UPDATE_TOPPINGS, payload: selectedvalue}

}