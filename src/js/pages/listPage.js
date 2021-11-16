import heading from "../components/ui/heading";
import makeElement from "../utils/makeElement";
import logo from "../components/icons/logo";
import header from "../components/header/header";
import todolist from "../components/cards/todolist";
import { getStore } from "../redux/store";
import items from "../components/cards/todoitem";
import { Router } from "../router/routes";

const listPage = function(){
    //getting list data
    const listHeader = document.createElement('header')
    const itemList = getStore()
    const container = todolist()

    //page content
    
    listHeader.classList.add('list-page')
    const h1 = heading('h1', 'What\'s up, Alvin!', 'list-page-tagline')

    listHeader.append(h1)
    listHeader.appendChild(makeElement(logo()))
    listHeader.appendChild(makeElement(header('Your favorite daily tracker')))

    function cleanUp(){
        const items = container.querySelectorAll('aside')
        items.forEach((item) =>{
            item.removeEventListener('click', onDeleteItem)
        })
    }


    //Event handler for removing employee
    function onDeleteItem (e){
        const itemId = e.currentTarget.dataset.key
        console.log(itemId)
        const item = getStore().filter((item) => item.id === itemId)
        cleanUp()
        Router('/delete', item[0])
    }

    //displaying to do list
    if (itemList !== null)
    {
        const ul = container.querySelector('ul')
        const elements = itemList.map(itm => items(itm))
        elements.forEach(element => {
            element.querySelector('#delete').addEventListener('click', onDeleteItem)
            ul.append(element)
        })
        listHeader.append(container)
    }

    return listHeader
}
export default listPage