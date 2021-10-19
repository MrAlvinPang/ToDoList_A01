import landingPage from "../pages/landingPage";
import homePage from "../pages/homePage";
import errorPage from "../pages/errorPage";

const Router = (pathname) => {
    const routes = {
        "/": landingPage(),
        "/home": homePage(),
        "/error": errorPage(),
    }

    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )

    app.appendChild(routes[window.location.pathname])
}

export default Router
export {routes}