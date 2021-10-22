import heading from "../components/ui/heading";
import makeElement from "../utils/makeElement";
import logo from "../components/icons/logo";
import header from "../components/header/header";
import button from "../components/ui/button"
import reducers from "../redux/reducers";
import todolist from "../components/cards/todolist";
import { getStore } from "../redux/store";
import items from "../components/cards/todoitem";

const listPage = function(){
    //getting list data
    const listHeader = document.createElement('header')
    const itemList = getStore()
    const container = todolist()

    //page content
    
    listHeader.classList.add('list-page')
    const h1 = heading('h1', 'What\'s up, Alvin!', 'list-page-tagline')
    const addButton = button("+", "add-button")

    listHeader.append(h1)
    listHeader.appendChild(makeElement(logo()))
    listHeader.appendChild(makeElement(header('Your favorite daily tracker')))

    //displaying to do list
    if (itemList !== null)
    {
        const ul = container.querySelector('ul')
        const elements = itemList.map(itm => items(itm))
        elements.forEach(element => ul.append(element))
        listHeader.append(container)
    }

    listHeader.append(addButton)

    return listHeader
}
export default listPage