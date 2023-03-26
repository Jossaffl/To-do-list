export {todoInputForm, entryDiv,  ProjectFormCreator}

function todoInputForm () {

    const inputDiv = document.getElementById('inputDiv') 

    const formDiv = document.createElement('div')
    formDiv.setAttribute('id','form')

    const tittleDiv = document.createElement('div')
    const tittleLabel= document.createElement('label')
    const tittleInput = document.createElement('textarea')
    tittleDiv.classList.add('tittle')
    tittleLabel.textContent = 'Tittle:'
    tittleDiv.appendChild(tittleLabel)
    tittleDiv.appendChild(tittleInput)

    const descriptionDiv = document.createElement('div')
    const descriptionLabel= document.createElement('label')
    const descriptionInput = document.createElement('textarea')
    descriptionDiv.classList.add('description')
    descriptionLabel.textContent = 'Description:'    
    descriptionDiv.appendChild(descriptionLabel)
    descriptionDiv.appendChild(descriptionInput)

    const dateDiv = document.createElement('div')
    const dateLabel= document.createElement('label')
    const dateInput = document.createElement('input')
    dateInput.type = 'date'
    dateLabel.textContent = 'Due date:'
    dateDiv.appendChild(dateLabel)
    dateDiv.appendChild(dateInput)

    const submitButton = document.createElement('button')
    submitButton.setAttribute('id','submitButton')
    submitButton.textContent = 'submit'

    return {
        createForm: () => {
            
            formDiv.appendChild(tittleDiv)
            formDiv.appendChild(dateDiv)
            formDiv.appendChild(descriptionDiv)
            formDiv.appendChild(submitButton)
            inputDiv.appendChild(formDiv)
        },

        'tittleInput': tittleInput,
        'descriptionInput': descriptionInput,
        'dateInput': dateInput,
        'submitButton': submitButton,
        'formDiv': formDiv
    }
}


const entryDiv = ({tittle, description, date}) => {

    const contentDiv = document.getElementById('content')

    let ListDiv = contentDiv.lastElementChild

    const entry = document.createElement('div')
    entry.classList.add('entry')

    const entryTittle = document.createElement('div');
    entryTittle.textContent = tittle
    entryTittle.classList.add('entryTittle')

    const entryDate = document.createElement('div');
    entryDate.textContent = date
    entryDate.classList.add('entryDate')

    const entryDescription = document.createElement('div');
    entryDescription.textContent = description
    entryDescription.classList.add('entryDescription')

    entry.appendChild(entryTittle)
    entry.appendChild(entryDate)
    entry.appendChild(entryDescription)

    return {
        appendDiv: () => {
            ListDiv.appendChild(entry)
        }
    }
}

function ProjectFormCreator () {

    const content = document.getElementById('content')

    const projectForm = document.createElement('div')

    const inputDiv = document.getElementById('inputDiv')
    
    const projectLabel = document.createElement('label')
    projectLabel.textContent = 'Project name'

    const projectName = document.createElement('input')
    projectName.type = 'text'

    const objectButton = document.createElement('button')
    objectButton.classList.add('projectButton')

    const objectDiv = document.createElement('div')
    objectDiv.classList.add('newList')

    const submitButton = document.createElement('button')
    submitButton.textContent = 'Add'

    submitButton.addEventListener('click', (e)=> {

        objectButton.textContent = projectName.value
        inputDiv.appendChild(objectButton)

        content.lastElementChild.replaceWith(objectDiv)

        inputDiv.removeChild(projectForm)

        e.preventDefault()
    })

    objectButton.addEventListener('click', ()=> {

        content.lastElementChild.replaceWith(objectDiv)

    })

    return {
        createProjectForm: () => {
            projectForm.appendChild(projectLabel)
            projectForm.appendChild(projectName)
            projectForm.appendChild(submitButton)
            inputDiv.appendChild(projectForm)
        },
        
    }
}
