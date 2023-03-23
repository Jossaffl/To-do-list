export {todoInput, entryDiv, projectForm}

function todoInput () {
    const form = document.createElement('div')
    form.setAttribute('id','form')

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

    form.appendChild(tittleDiv)
    form.appendChild(dateDiv)
    form.appendChild(descriptionDiv)
    form.appendChild(submitButton)

    return {
        form, tittleInput, descriptionInput, dateInput, submitButton
    }
}

const entryDiv = (tittle, date, description) => {

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

    const appender = (tittle, date) => {
        if (date.textContent == '') {
            entry.appendChild(tittle)
        }
        else {
            entry.appendChild(tittle)
            entry.appendChild(date)
        }
    }

    appender(entryTittle, entryDate)
    

    return {
        entry
    }

}




const projectForm = () => {

    const newProject = document.getElementById('newProject')

    const inputDiv = document.getElementById('inputDiv')

    const list = document.getElementById('list')

    const newList = document.createElement('div')
    newList.classList.add('newList')

    const projectForm = document.createElement('div')
    projectForm.classList.add('projectForm')

    const projectLabel = document.createElement('label')
    projectLabel.textContent = 'Project name'

    const projectName = document.createElement('input')
    projectName.type = 'text'

    const submitButton = document.createElement('button')
    submitButton.textContent = 'Add'

    projectForm.appendChild(projectLabel)
    projectForm.appendChild(projectName)
    projectForm.appendChild(submitButton)

    newProject.addEventListener('click', () => {
        inputDiv.appendChild(projectForm)
    
    })

    submitButton.addEventListener('click', () => { 
        list.replaceWith(newList)
    })
    

    return {
        projectForm, submitButton
    }
}


