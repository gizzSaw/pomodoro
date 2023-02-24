import { state } from "./state.js"

const titleElem = document.querySelector('.title')
const todoListElem = document.querySelector('.todo__list')

const li = document.createElement('li')
li.classList.add('todo__item')

const todoAddBtn = document.createElement('button')
todoAddBtn.classList.add('todo__add')
todoAddBtn.textContent = 'Добавить новую задачу'
li.append(todoAddBtn)

const getTodo = () => {
    const todoList = JSON.parse(localStorage.getItem('pomodoro') || '[]')

    if (!todoList.length) {
        todoList.push({
            id: 'default',
            pomodoro: 0,
            title: 'Помодоро',
        })
    }

    return todoList
}

const renderTodoList = (list) => {
    todoListElem.textContent = ''
    
    list.forEach((todo) => {
        if (todo.id !== 'default') {
            const todoItem = document.createElement('li')
            todoItem.classList.add('todo__item')

            const todoItemWrapper = document.createElement('div')
            todoItemWrapper.classList.add('todo__item-wrapper')
            todoItem.append(todoItemWrapper)

            const todoBtn = document.createElement('button')
            todoBtn.classList.add('todo__btn')
            todoBtn.textContent = todo.title

            const editBtn = document.createElement('button')
            todoBtn.classList.add('todo__edit')
            todoBtn.ariaLabel = 'Редактировать задачу'

            const delBtn = document.createElement('button')
            todoBtn.classList.add('todo__del')
            todoBtn.ariaLabel = 'Удалить задачу'

            todoItemWrapper.append(todoBtn, editBtn, delBtn)

            todoListElem.prepend(todoItem)
        }
    })

    todoListElem.append(li)
}

/* 
        <li class="todo__item">
          <div class="todo__item-wrapper">
            <button class="todo__btn">Написать Pomodoro</button>
            <button class="todo__edit" aria-label="Редактировать"></button>
            <button class="todo__del" aria-label="Удалить"></button>
          </div>
        </li>
*/

const showTodo = () => {
    titleElem.textContent = state.activeTodo.title
    // вывести кол-во помодорок
}

export const initTodo = () => {
    const todoList =  getTodo()
    state.activeTodo = todoList[0]
    showTodo()

    renderTodoList(todoList)
}