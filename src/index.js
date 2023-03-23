import {todoInput, entryDiv, projectForm} from './dom.js'
import './style/main.scss'

const todoList = (tittle , description, date ) => {
        return{
                tittle, description, date
        }
}

const buttonFunction = () => {
        const button = document.getElementById('addButton')
        const formElements = todoInput();
        const todoDiv = document.getElementById('inputDiv') 
      
        button.addEventListener('click', () => {
            todoDiv.appendChild(formElements.form);
        })

        formElements.submitButton.addEventListener('click', (e) => {
                const newEntry = todoList(formElements.tittleInput.value, formElements.descriptionInput.value, formElements.dateInput.value);
                console.log(newEntry)
                todoDiv.removeChild(formElements.form)
                submitEntries(newEntry)
                e.preventDefault();
            })
    }


const submitEntries = (object) =>  {

        const todoDiv = document.getElementById('list')
        const entry = entryDiv(object.tittle, object.date, object.description);
        todoDiv.appendChild(entry.entry)
      
}

const projectCreator = () => {



    }

buttonFunction()
projectForm()