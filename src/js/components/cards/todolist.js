import makeElement from './../../utils/makeElement'

const todolist = function(){
    const template = `
    <aside id="todolist" class="todolist">
    <header>
        <h2>Recent Activity</h2>
    </header>
    <ul id="items" class="items">

    </ul>
    <footer>

    </footer>
    </aside>
    `
    return makeElement(template)
}

export default todolist