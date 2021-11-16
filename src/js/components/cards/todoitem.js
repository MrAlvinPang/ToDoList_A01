import makeElement from "../../utils/makeElement";

const items = function({id, category, description, isComplete, endDate}){
    const template = `
    <li class="todoitems" data-key="${id}">
    <p class="card-title"> ${category} </p>
    <p class="card-desc"> ${description}</p>
    <p class="card-comp">Comp: ${isComplete}</p>
    <p class="card-date">Due: ${endDate}</p>
    <p class="controls"><button id="edit">edit</button><button id="delete">delete</button></p> 
    </li>
    `;
    return makeElement(template)
}
export default items