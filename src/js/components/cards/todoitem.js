import makeElement from "../../utils/makeElement";
import editicon from "../icons/editicon";
import deleteicon from "../icons/deleteicon";
import deleteicon from "../icons/deleteicon";

const _deleteicon = deleteicon()
const _editicon = editicon()

const items = function({id, category, description, isComplete, endDate}){
    const template = `
    <li class="todoitems" data-key="${id}">
    <p class="card-title"> ${category} </p>
    <input class="card-comp" type="checkbox" ${isComplete === true ? "checked" : ""} onclick="return false" />
    <p class="card-desc"> ${description}</p>
    <p class="card-date">Due: ${endDate}</p>
    <p class="controls"><button id="edit" data-key=${id}>${_editicon}</button><button id="delete" data-key=${id}>${_deleteicon}</button></p> 
    </li>
    `;
    return makeElement(template)
}
export default items