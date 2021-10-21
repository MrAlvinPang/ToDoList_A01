import makeElement from "../../utils/makeElement";

const items = function(id, category, description, iscomplete){
    const template = `
    <li class="employee" data-key="${id}">
    <p> ${category} </p>
    <p>email: ${description}</p>
    <p>phone: ${iscomplete}</p> 
    <p class="controls"><button>edit</button><button>delete</button></p> 
    </li>
    `;
    return makeElement(template)
}
export default items