import heading from "../components/ui/heading";
import makeElement from "../utils/makeElement";
import logo from "../components/icons/logo";
import header from "../components/header/header";
import link from "../components/ui/link";
import todolist from "../components/cards/todolist";
import button from "./../components/ui/button"
import reducers from "../components/redux/reducers";

const homePage = function(){
    const homeHeader = document.createElement('header')
    homeHeader.classList.add('home-page')
    const h1 = heading('h1', 'What\'s up, Alvin!', 'home-tagline')
    const linkElem = link("Error Page", "/error")
    const addButton = button("+", "add-button")

    homeHeader.append(linkElem)
    homeHeader.append(h1)
    homeHeader.appendChild(makeElement(logo()))
    homeHeader.appendChild(makeElement(header('Your favorite daily tracker')))
    homeHeader.append(todolist())
    homeHeader.append(addButton)
    addButton.addEventListener('click', function(e){
        const action = {type: "clicked"}
        const payload = {id: 1}

        const temp = reducers({action, payload})
        console.log(temp)
    })

    return homeHeader
}
export default homePage