import link from "../components/ui/link";
import {getStore} from "./store"

function reducers ({action, payload, ...rest}){
    switch (action.type){
        case "clicked": return "error";
        default: return store
    }
}

export default reducers