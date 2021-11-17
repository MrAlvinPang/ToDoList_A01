import heading from "../components/ui/heading";
import makeElement from "../utils/makeElement";
import logo from "../components/icons/logo";
import button from "../components/ui/button"
import reducers from "../redux/reducers";
import { getStore } from "../redux/store";
import { Router } from "../router/routes";

const cancelButton = button("cancel")
const addButton = button("add")

const addPage = function (props){
    const page = document.createElement('div')
    const h1 = heading('h1', 'A new to do!', 'add-page-tagline')
    page.classList.add("add-page")
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
            <input type="text" id="itemId">
        </div>

        <div class="category-field">
            <label for="category">Category</label>
            <select id="category">
                <option value="home">Home</option>
                <option value="school">School</option>
                <option value="health">Health</option>
                <option value="friends">Friends</option>
                <option value="work">Work</option>
            </select>
        </div>
        
        <div class="title-field">
            <label for="title">Title</label>
            <input type="text" id="title">
        </div>

        <div class="startdate-field">
            <label for="startDate">Start Date</label>
            <input type="text" id="startDate">
        </div>
        
        <div class="starttime-field">
            <label for="startTime">Start Time</label>
            <input type="text" id="startTime">
        </div>
        
        <div class="enddate-field">
            <label for="endDate">End Date</label>
            <input type="text" id="endDate">
        </div>
        
        <div class="endtime-field">
            <label for="endTime">End Time</label>
            <input type="text" id="endTime">
        </div>
        
        <div class="complete-field">
            <label for="complete">Mark as complete</label>
            <input type="checkbox" id="complete">
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
    // addButton.addEventListener('click', onRemoveItem)
    const formHeader = makeElement(formTemplate)
    page.append(formHeader)
    pageHeader.querySelector('div').append(cancelButton, addButton)
    page.append(pageHeader)
    return page
}
export default addPage