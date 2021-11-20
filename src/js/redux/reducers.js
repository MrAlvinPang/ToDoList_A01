import {getStore, updateStore} from "./store"

function reducer  (action){
    const store = getStore();   
    const index = action.payload.index;         
    const newStore = [...store.slice(0, index), ...store.slice(index + 1)]
    switch(action.type){
        case "delete":
            // grabing the current store
         store;    
         index;
         newStore;
         updateStore(newStore)
         action.cb( )
        return  "remove item";
        case "edit":
            store;    
            index;
            const editStore = [...store];
            updateStore(editStore)
            action.cb( )
        return "edit item";
        case "add":
            store;    
            index;
            const addStore = [...store];
            updateStore(addStore)
            action.cb( )
        return "add new item";
        default: return store
    }

}
export default reducer