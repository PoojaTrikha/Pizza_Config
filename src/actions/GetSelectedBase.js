import {UPDATE_BASE} from './index'

export default function GetSelectedBase(selectedbase,price) {

    return {type: UPDATE_BASE, payload: {selectedbase,price}}

}