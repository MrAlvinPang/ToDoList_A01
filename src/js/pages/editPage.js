import { getStore } from "../redux/store";
import heading from "../components/ui/heading";
import makeElement from "../utils/makeElement";
import logo from "../components/icons/logo";
import button from "../components/ui/button"
import reducers from "../redux/reducers";
import { Router } from "../router/routes";
import todolist from "../components/cards/todolist";

const cancelButton = button("cancel")
const editButton = button("save")

const editPage = function(props){
    const page = document.createElement('div')
    const h1 = heading('h1', 'What would you like to change?', 'edit-page-tagline')

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
    function onSaveItem(e) {
        if (props != null){
            Router('/list')
            const saveItem = props
            saveItem.description = formHeader.querySelector('#title').value
            saveItem.category = formHeader.querySelector('#category').value
            saveItem.startDate = formHeader.querySelector('#startDate').value
            saveItem.startTime = formHeader.querySelector('#startTime').value
            saveItem.endDate = formHeader.querySelector('#endDate').value
            saveItem.endTime = formHeader.querySelector('#endTime').value
            saveItem.isComplete = formHeader.querySelector('#complete').checked
            const index = getStore().findIndex(item => item.id === saveItem.id)
            const action = {
                type:"edit",
                payload:{index},
                cb:() => Router('/list')
            }
            reducers(action)
            cleanUp()
        }

    }

    //creation of form

    let formTemplate = `
    <form method="post">
        <div class="id-field">
            <label for="itemId">ID</label>
            <input type="text" id="itemId" value="${props.id}"readonly>
        </div>

        <div class="category-field">
            <label for="category">Category</label>
            <select id="category">
                <option value="Home" ${props.category === 'Home' ? 'selected' : ''}>Home</option>
                <option value="School" ${props.category === 'School' ? 'selected' : ''}>School</option>
                <option value="Health" ${props.category === 'Health' ? 'selected' : ''}>Health</option>
                <option value="Friends" ${props.category === 'Friends' ? 'selected' : ''}>Friends</option>
                <option value="Work" ${props.category === 'Work' ? 'selected' : ''}>Work</option>
            </select>
        </div>
        
        <div class="title-field">
            <label for="title">Desc</label>
            <textarea id="title">${props.description}</textarea>
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
    editButton.addEventListener('click', onSaveItem)
    const formHeader = makeElement(formTemplate)
    // adding a listener to accurately display checkbox value.
    formHeader.querySelector('#complete').addEventListener('click', function(evt){
        console.log(document.getElementById('complete').checked)
        if (document.getElementById('complete').checked == false)
        {
            document.getElementById('complete').checked = false
            props.isComplete.checked = false
        }
        else if (document.getElementById('complete').checked == true)
        {
            document.getElementById('complete').checked = true
            props.isComplete.checked = true
        }
    })
    page.append(formHeader)
    pageHeader.querySelector('div').append(cancelButton, editButton)
    page.append(pageHeader)
    return page

}
export default editPage