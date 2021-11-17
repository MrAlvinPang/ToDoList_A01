import {getStore, updateStore} from "./store"

function reducer  (action){
    console.log(action)

    switch(action.type){
        case "delete":
            // grabing the current store
         const store = getStore();       
         const index = action.payload.index;         
         const newStore = [...store.slice(0, index), ...store.slice(index + 1)]
         updateStore(newStore)
         action.cb( )
        return  "remove item";
        case "edit": 
        return "edit item";
        case "add": 
        return "add new item";
        default: return store
    }

}
export default reducer