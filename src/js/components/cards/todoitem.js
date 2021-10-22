import makeElement from "../../utils/makeElement";

const items = function({id, category, description, isComplete, endDate}){
    const template = `
    <li class="todoitems" data-key="${id}">
    <p> ${category} </p>
    <p> ${description}</p>
    <p>complete: ${isComplete}</p>
    <p>due: ${endDate}</p>
    <p class="controls"><button>edit</button><button>delete</button></p> 
    </li>
    `;
    return makeElement(template)
}
export default items