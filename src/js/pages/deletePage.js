import heading from "../components/ui/heading";
import makeElement from "../utils/makeElement";
import logo from "../components/icons/logo";
import button from "../components/ui/button"
import reducers from "../redux/reducers";
import { getStore } from "../redux/store";
import { Router } from "../router/routes";
import items from "../components/cards/todoitem";

const cancelButton = button("cancel")
const deleteButton = button("delete")

const deletePage = function(props){
    const page = document.createElement('div')
    const h1 = heading('h1', 'Are you sure you want to delete this item?', 'delete-page-tagline')


    page.classList.add("delete-page")
    page.append(makeElement(logo))
    page.append(h1)

    //displaying the selected list item
    const selectedItem = items(props)
    page.append(selectedItem)
    selectedItem.querySelector('.controls').remove()
    selectedItem.querySelector('.card-comp').remove()

    function cleanUp(){
        cancelButton.removeEventListener('click', onCancelDelete)
        deleteButton.removeEventListener('click', onRemoveItem)
    }
    function onCancelDelete(e){
        cleanUp()
        Router('/list')
    }
    function onRemoveItem (e){
        if (props !== null)
        {
            Router('/list')
            const removeItem = props
            const index = getStore().findIndex(item => item.id === removeItem.id)
            const action = {
                type:"delete",
                payload:{index},
                cb:() => Router('/list')
            }
            reducers(action)
            cleanUp()
        }
    }

    let headerTemplate = `
    <header>
        <div></div>
    </header>
`
    const pageHeader = makeElement(headerTemplate) 
    pageHeader.querySelector('div').innerHTML = ''
    cancelButton.addEventListener('click', onCancelDelete)  
    deleteButton.addEventListener('click', onRemoveItem) 
    pageHeader.querySelector('div').append(cancelButton, deleteButton)
    page.append(pageHeader)
    return page
}
export default deletePage