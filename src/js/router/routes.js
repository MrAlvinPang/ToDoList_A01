import landingPage from "../pages/landingPage";
import homePage from "../pages/homePage";
import errorPage from "../pages/errorPage";

const routes = {
    "/": landingPage,
    "/home": homePage,
}

const Router = (pathname) => {

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
        app.appendChild(routes[window.location.pathname]())
    }
}

export {Router}
export {routes}