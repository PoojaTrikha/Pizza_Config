import {UPDATEBASE} from './index'

export default function Bases(baseSelection,price) {

    return {type: UPDATEBASE, payload: {baseSelection,price}}

}