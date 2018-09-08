import {UPDATEBASE} from './index'

export default function Bases(selectedbase,price) {

    return {type: UPDATEBASE, payload: {selectedbase,price}}

}