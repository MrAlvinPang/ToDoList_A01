import heading from "../components/ui/heading";
import makeElement from "../utils/makeElement";
import logo from "../components/icons/logo";
import header from "../components/header/header";
import link from "../components/ui/link";

const homePage = function(){
    const homeHeader = document.createElement('header')
    homeHeader.classList.add('home-page')
    const h1 = heading('h1', 'What\'s up, Alvin!')
    const linkElem = link("Error Page", "/error")

    homeHeader.append(linkElem)
    homeHeader.append(h1)
    homeHeader.appendChild(makeElement(logo()))
    homeHeader.appendChild(makeElement(header('Your favorite daily tracker')))

    return homeHeader
}
export default homePage