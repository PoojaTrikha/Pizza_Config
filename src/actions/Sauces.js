import {UPDATESAUCE} from './index'

export default function Sauces(sauceSelection,price) {

    return {type: UPDATESAUCE, payload: {sauceSelection,price}}

}