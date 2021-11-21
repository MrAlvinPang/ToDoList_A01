import heading from "../components/ui/heading";
import makeElement from "../utils/makeElement";
import logo from "../components/icons/logo";
import button from "../components/ui/button"
import reducers from "../redux/reducers";
import { createStore, getStore } from "../redux/store";
import { Router } from "../router/routes";
import keyGenerator from "../utils/key";

const cancelButton = button("cancel")
const addButton = button("add")

const addPage = function (props){
    const page = document.createElement('div')
    const h1 = heading('h1', 'A new to do!', 'add-page-tagline')
    page.classList.add("add-page")
    page.append(makeElement(logo))
    page.append(h1)

    function cleanUp(){
        cancelButton.removeEventListener('click', onCancelEdit)
        // editButton.removeEventListener('click', onRemoveItem)
    }
    function onCancelEdit(e){
        cleanUp()
        Router('/list')
    }
    function onAddItem(e){
        if (props != null){
            Router('/list')
            const saveItem = props
            console.log(props.isComplete)
            newItem.description = formHeader.querySelector('#title').value
            newItem.category = formHeader.querySelector('#category').value
            newItem.startDate = formHeader.querySelector('#startDate').value
            newItem.startTime = formHeader.querySelector('#startTime').value
            newItem.endDate = formHeader.querySelector('#endDate').value
            newItem.endTime = formHeader.querySelector('#endTime').value
            newItem.isComplete = formHeader.querySelector('#complete').value
            const index = getStore()
            const action = {
                type:"add",
                payload:{index},
                cb:() => Router('/list')
            }
            reducers(action)
            cleanUp()
        }
    }

    //adding new to do item
    let newItem = {
        id: '',
        category: '',
        description: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        isComplete: ''
    }

    let formTemplate = `
    <form method="post">
        <div class="id-field">
            <label for="itemId">ID</label>
            <input type="text" id="itemId" value="${newItem.id}"readonly>
        </div>

        <div class="category-field">
            <label for="category">Category</label>
            <select id="category">
                <option value="Home" ${newItem.category === 'Home' ? 'selected' : ''}>Home</option>
                <option value="School" ${newItem.category === 'School' ? 'selected' : ''}>School</option>
                <option value="Health" ${newItem.category === 'Health' ? 'selected' : ''}>Health</option>
                <option value="Friends" ${newItem.category === 'Friends' ? 'selected' : ''}>Friends</option>
                <option value="Work" ${newItem.category === 'Work' ? 'selected' : ''}>Work</option>
            </select>
        </div>
        
        <div class="title-field">
            <label for="title">Desc</label>
            <textarea id="title">${newItem.description}</textarea>
        </div>

        <div class="startdate-field">
            <label for="startDate">Start Date</label>
            <input type="text" id="startDate" value="${newItem.startDate}">
        </div>
        
        <div class="starttime-field">
            <label for="startTime">Start Time</label>
            <input type="text" id="startTime" value="${newItem.startTime}">
        </div>
        
        <div class="enddate-field">
            <label for="endDate">End Date</label>
            <input type="text" id="endDate" value="${newItem.endDate}">
        </div>
        
        <div class="endtime-field">
            <label for="endTime">End Time</label>
            <input type="text" id="endTime" value="${newItem.endTime}">
        </div>
        
        <div class="complete-field">
            <label for="complete">Mark as complete</label>
            <input type="checkbox" id="complete" ${newItem.isComplete === true ? 'checked' : ''}>
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
    addButton.addEventListener('click', onAddItem)
    const formHeader = makeElement(formTemplate)
    page.append(formHeader)
    pageHeader.querySelector('div').append(cancelButton, addButton)
    page.append(pageHeader)
    return page
}
export default addPage