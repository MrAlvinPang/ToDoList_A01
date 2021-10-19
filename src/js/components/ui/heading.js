import makeElement from "../../utils/makeElement"

const heading = function (elementType='h2', label="uiHeading", className="ui-Heading"){

    const template = `<${elementType} class="${className}">${label}</${elementType}>`
    const element = makeElement(template)

    return element

}

export default heading