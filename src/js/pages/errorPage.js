import heading from "../components/ui/heading";
import makeElement from "../utils/makeElement";
import logo from "../components/icons/logo";
import header from "../components/header/header";
import link from "../components/ui/link";

const errorPage = function(){
    const errorHeader = document.createElement('header')
    errorHeader.classList.add('error-page')
    const h1 = heading('h1', 'Something went wrong :(')
    const linkElem = link('Take me home', '/home')

    errorHeader.appendChild(makeElement(logo()))
    errorHeader.appendChild(makeElement(header('Your favorite daily tracker')))
    
    errorHeader.appendChild(h1)
    errorHeader.appendChild(linkElem)
    return errorHeader
}

export default errorPage