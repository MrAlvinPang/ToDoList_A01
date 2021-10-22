import heading from "../components/ui/heading";
import makeElement from "../utils/makeElement";
import logo from "../components/icons/logo";
import header from "../components/header/header";
import link from "../components/ui/link";
import message from "../components/ui/message";


const errorPage = function(){
    const errorHeader = document.createElement('header')
    errorHeader.classList.add('error-page')
    const h1 = heading('h1', 'Something went wrong :(', 'error-tagline')
    const linkElem = link('Take me home', '/list')
    const errorMessage = message('p', 'Seems like we couldn\'t find what you were looking for.', 'error-message')

    errorHeader.appendChild(makeElement(logo()))
    errorHeader.appendChild(makeElement(header('Your favorite daily tracker')))
    
    errorHeader.appendChild(h1)
    errorHeader.appendChild(errorMessage)
    errorHeader.appendChild(linkElem)
    return errorHeader
}

export default errorPage