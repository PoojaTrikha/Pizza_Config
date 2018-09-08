import {UPDATE_SAUCE} from './index'

export default function GetSelectedSauce(selectedsauce,price) {

    return {type: UPDATE_SAUCE, payload: {selectedsauce,price}}

}