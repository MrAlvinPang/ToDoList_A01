import makeElement from "../../utils/makeElement"

const button = function (label="uiButton", className="ui-Button"){

    const template = `<button class="${className}">${label}</button>`
    const element = makeElement(template)

    return element
}

export default button