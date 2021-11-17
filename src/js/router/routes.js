import landingPage from "../pages/landingPage";
import listPage from "../pages/listPage";
import errorPage from "../pages/errorPage";
import deletePage from "../pages/deletePage";
import editPage from "../pages/editPage";
import addPage from "../pages/addPage";

const routes = {
    "/": landingPage,
    "/list": listPage,
    "/*": errorPage,
    "/delete": deletePage,
    "/add": addPage,
    "/edit": editPage,
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