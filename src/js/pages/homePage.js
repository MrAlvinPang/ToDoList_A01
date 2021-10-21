import heading from "../components/ui/heading";
import makeElement from "../utils/makeElement";
import logo from "../components/icons/logo";
import header from "../components/header/header";
import todolist from "../components/cards/todolist";
import button from "./../components/ui/button"
import reducers from "../redux/reducers";
import todolist from "../components/cards/todolist";
import { getStore } from "../redux/store";
import todoitem from "./../components/cards/todoitem";
const homePage = function(){
    //building rest of the webpage
    const homeHeader = document.createElement('header')
    homeHeader.classList.add('home-page')
    const h1 = heading('h1', 'What\'s up, Alvin!', 'home-tagline')
    const addButton = button("+", "add-button")

    //for list items
    const container = todolist()
    const itemList = getStore()

    //appending elements to webpage
    homeHeader.append(h1)
    homeHeader.appendChild(makeElement(logo()))
    homeHeader.appendChild(makeElement(header('Your favorite daily tracker')))

    //displaying data. Assume data is not null
    if (itemList !== null)
    {
        //getting a reference to the unordered list
        const ul = container.querySelector('ul')
        //creating the cards from the data
        const elements = itemList.map(emp => todoitem(emp))
        elements.forEach(element => ul.append(element))
        homeHeader.append(container)
        console.log(elements)
    }
    
    homeHeader.append(addButton)
    addButton.addEventListener('click', function(e){
        const action = {type: "clicked"}
        const payload = {id: 1}

        const temp = reducers({action, payload})
    })

    return homeHeader
}
export default homePage