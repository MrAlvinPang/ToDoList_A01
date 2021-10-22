import logo from "./../components/icons/logo"
import header from "./../components/header/header"
import makeElement from "../utils/makeElement"
import link from "../components/ui/link"

const landingPage = function(params){

    const pageHeader = document.createElement('header')
    const linkElem = link("Let's Go", "/list")
    pageHeader.classList.add('landing-Page')
    pageHeader.appendChild(makeElement(logo()))
    pageHeader.appendChild(makeElement(header('Your favorite daily tracker')))
    pageHeader.appendChild(linkElem);

    return pageHeader
}

export default landingPage