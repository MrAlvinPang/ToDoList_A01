import makeElement from "../../utils/makeElement";

const message = function(elementType='p', label='uiMessage', className="ui-Message") {
    const template = `<${elementType} class="${className}">${label}</${elementType}>`

    const elemenet = makeElement(template)
    return elemenet
}

export default message