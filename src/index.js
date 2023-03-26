import {entryDiv, todoInputForm, ProjectFormCreator} from './dom.js'
import './style/main.scss'

const todoListInput = () => {

        return{
                ...todoInputForm()
        }
}

const todoObject = (tittle, description, date) => {

        const todoEntry = {tittleD: tittle, descriptionD:description, dateD: date}

        return {
                ...todoEntry,
                ...entryDiv({tittle, description, date})
        }
}

function AddButtonFunctionality(){

        const NewEntryButton = document.getElementById('addButton')
        const inputDiv = document.getElementById('inputDiv') 
        const input = todoListInput()

        NewEntryButton.addEventListener('click', ()=> {
                input.createForm()
        })

        input.submitButton.addEventListener('click', (e)=> {
                let newObject = todoObject(input.tittleInput.value, input.descriptionInput.value, input.dateInput.value)
                newObject.appendDiv()
                inputDiv.removeChild(input['formDiv'])
                e.preventDefault()
        })
                
}


const createProject = () =>{
        
        return {
                ...ProjectFormCreator()
        }

}

const projectFormFunctionality = () => {

        const newProjectButton = document.getElementById('newProjectButton')

        newProjectButton.addEventListener('click', () => {
                const input = createProject()
                input.createProjectForm()
        })
                
}

const MainButton = () => {
        const button = document.getElementById('defaultProject')
        const listDiv = document.getElementById('list')
        const contentDiv = document.getElementById('content')
        
        button.addEventListener('click', ()=> {
                contentDiv.lastElementChild.replaceWith(listDiv)
        } )
}


AddButtonFunctionality()
projectFormFunctionality()
MainButton()

