import {UPDATESAUCE} from './index'

export default function Sauces(selectedsauce,price) {

    return {type: UPDATESAUCE, payload: {selectedsauce,price}}

}