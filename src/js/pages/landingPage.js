import logo from "./../components/icons/logo"
import header from "./../components/header/header"
import button from "./../components/button/button"
import makeElement from "../utils/makeElement"

const landingPage = function(params){

    const pageHeader = document.createElement('header')
    pageHeader.classList.add('landing-Page')
    pageHeader.appendChild(makeElement(logo()))
    pageHeader.appendChild(makeElement(header('Your favorite daily tracker!')))
    pageHeader.appendChild(makeElement(button("Let's Go")))

    return pageHeader
}

export default landingPage