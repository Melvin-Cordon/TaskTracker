const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  const list = document.getElementById('todo-list')
  const text = document.getElementById('textintodo')
  var cards = {}
  
  function newTodo() {
  
    const title = document.querySelector('#todoTitle').value
    const descrip = document.querySelector('#todoBody').value
  
    if (title === "" || descrip === ""){
  
      alert("You need to enter a Title and Description")
       return 1
    }
  
    const blank = document.createElement("br")
    todoElement = makeTodo(title, descrip)
    render(todoElement, list)
    render(blank, list)
  
  
    document.querySelector('#todoTitle').value = ""
    document.querySelector('#todoBody').value = ""
  
  
  }
  
  function makeTodo(title, descrip) {
  
  
     const li = document.createElement("div")
     cards[Object.keys(cards).length] = li
     addStyle(Object.keys(cards).length, "id", li)
  
  
     const div1 = document.createElement("div")
     addStyle("row justify-content-center", "class", li)
  
  
     const div2 = document.createElement("div")
     addStyle("card", "class", div2)
     addStyle("width: 18rem;", "style", div2)
  
     const div3 = document.createElement("div")
     addStyle("card-body", "class", div3)
  
     const h5 = document.createElement("h5")
     h5.innerHTML = title
     addStyle("card-title", "class", h5)
  
     const p = document.createElement("p")
     p.innerHTML = descrip
     addStyle("card-text", "class", p)
  
     const a = document.createElement("a")
     addStyle("#", "href", a)
     addStyle("btn btn-primary", "class", a)
     str = "removeElement("
     idfun = str.concat(Object.keys(cards).length,")")
     addStyle(idfun, "onClick", a)
  
     a.innerHTML = "KO'ed!"
  
     render(h5, div3)
     render(p, div3)
     render(a, div3)
     render(div3, div2)
     render(div2,div1)
     render(div1,li)
  
  
     return li
  
  }
  
  // append elements to the DOM
  function render(element, destination) {
    destination.appendChild(element)
  }
  
  // add css to html elements
  function addStyle(style, type, element) {
    element.setAttribute(type, style)
  }
  
  function textClickedClear() {
  
    text.value = ""
  
  }
  
  
  
  function removeElement(elementId) {
      // Removes an element from the document
      var element = document.getElementById(elementId);
      element.parentNode.removeChild(element);
  }