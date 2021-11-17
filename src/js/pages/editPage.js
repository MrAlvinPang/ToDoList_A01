import heading from "../components/ui/heading";
import makeElement from "../utils/makeElement";
import logo from "../components/icons/logo";
import button from "../components/ui/button"
import reducers from "../redux/reducers";
import { getStore } from "../redux/store";
import { Router } from "../router/routes";

const cancelButton = button("cancel")
const editButton = button("save")

const editPage = function(props){
    const page = document.createElement('div')
    const h1 = heading('h1', 'What would you like to change?', 'edit-page-tagline')
    console.log(props)


    page.classList.add("edit-page")
    // page.append(makeElement(logo))
    page.append(h1)

    function cleanUp(){
        cancelButton.removeEventListener('click', onCancelEdit)
        // editButton.removeEventListener('click', onRemoveItem)
    }
    function onCancelEdit(e){
        cleanUp()
        Router('/list')
    }

    let formTemplate = `
    <form method="post">
        <div class="id-field">
            <label for="itemId">ID</label>
            <input type="text" id="itemId" value="${props.id}"readonly>
        </div>

        <div class="category-field">
            <label for="category">Category</label>
            <select id="category">
                <option value="home" ${props.category === 'Home' ? 'selected' : ''}>Home</option>
                <option value="school" ${props.category === 'School' ? 'selected' : ''}>School</option>
                <option value="health" ${props.category === 'Health' ? 'selected' : ''}>Health</option>
                <option value="friends" ${props.category === 'Friends' ? 'selected' : ''}>Friends</option>
                <option value="work" ${props.category === 'Work' ? 'selected' : ''}>Work</option>
            </select>
        </div>
        
        <div class="title-field">
            <label for="title">Desc</label>
            <textarea id="title">
            ${props.description}
            </textarea>
        </div>

        <div class="startdate-field">
            <label for="startDate">Start Date</label>
            <input type="text" id="startDate" value="${props.startDate}">
        </div>
        
        <div class="starttime-field">
            <label for="startTime">Start Time</label>
            <input type="text" id="startTime" value="${props.startTime}">
        </div>
        
        <div class="enddate-field">
            <label for="endDate">End Date</label>
            <input type="text" id="endDate" value="${props.endDate}">
        </div>
        
        <div class="endtime-field">
            <label for="endTime">End Time</label>
            <input type="text" id="endTime" value="${props.endTime}">
        </div>
        
        <div class="complete-field">
            <label for="complete">Mark as complete</label>
            <input type="checkbox" id="complete" ${props.isComplete === true ? 'checked' : ''}>
        </div>
    </form>
    `

    let headerTemplate = `
    <header>
        <div></div>
    </header>
`
    const pageHeader = makeElement(headerTemplate) 
    pageHeader.querySelector('div').innerHTML = ''
    cancelButton.addEventListener('click', onCancelEdit)  
    // editButton.addEventListener('click', onRemoveItem)
    const formHeader = makeElement(formTemplate)
    page.append(formHeader)
    pageHeader.querySelector('div').append(cancelButton, editButton)
    page.append(pageHeader)
    return page
}
export default editPage