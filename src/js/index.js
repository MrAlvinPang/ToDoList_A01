import {Router} from "./router/routes";
import { createStore, getStore } from "./redux/store";
import { dataFetcher } from "./utils/dataFetcher"
import keyGenerator from "./utils/key";
const app = document.querySelector('#app')
Router(window.location.pathname)

const onAppInit = async function(e){
    let todoitems = await dataFetcher('./data/todos.json')

    if (todoitems[0].id === undefined){
        todoitemse = [...keyGenerator(todoitems)]
    }

    createStore(todoitems)
}

window.addEventListener('load', onAppInit)