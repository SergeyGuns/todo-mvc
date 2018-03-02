class Model {
  constructor() {
    this.state = {
      todoList: [
        {
          id: 51234,
          text: 'work it',
          checked: false
        },
        {
          id: 51234,
          text: 'work',
          checked: false
        },
      ]
    }
  }
  setState(newState, cd) {
    this.state = { ...this.state, newState }
    if(cd) {
      cb()
    }
  }

  getState() {
    return this.state
  }
}

class Controller {
  constructor(model) {
    
  }
  add (listText, model) {
    let newTodoList = model.todoList
    newTodoList.push({
      id: Date.now(),
      test: listText,
      checked: false
    })
    return {
      ...model,
      todoList: newTodoList
    }
  }
}


class View {
  constructor(htmlList, model) {
    this.htmlList = htmlList
    this.model = model
  }
  render () {
    let { htmlList, model } = this
    let newList = `
      ${model.getState().todoList.map(el => {`
        <input type="checkbox" value=${el.checked} data-id=${el.id}> ${el.text} </input>`
      }).join('<br>')}`
    htmlList.innerHTML = newList
  }
}
let lists = document.querySelector('.list')
let form = document.querySelector('form')

let model = new Model()
let controller = new Controller(model)
let view = new View(lists, model)
view.render()


form.addEventListener('change', e => console.log(e))



