import landingPage from "../pages/landingPage";
import listPage from "../pages/listPage";
import errorPage from "../pages/errorPage";
import deletePage from "../pages/deletePage";

const routes = {
    "/": landingPage,
    "/list": listPage,
    "/*": errorPage,
    "/delete": deletePage,
}

const Router = (pathname, params = null) => {

    const isValidRoute = Object.keys(routes).find(key => key === pathname)
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )

    if (isValidRoute === undefined)
    {
        app.appendChild(errorPage())
    }
    else
    {
        app.appendChild(routes[isValidRoute](params))
    }
}

export {Router}