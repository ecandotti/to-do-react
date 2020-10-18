import React from 'react'
import ToDoList from './ToDoList'
import NavBar from './NavBar'
import AddTask from './AddTask'
// import initialData from '../initialData'
// import uniqueid from 'uniqueid'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends React.Component {

    // state = {
    //     tasks: initialData
    // }

    // onToggleCompleted = (taskId) => {
    //     let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
    //     taskToUpdate.completed = !taskToUpdate.completed

    //     this.setState(preState => (
    //         preState.tasks.map(task => {
    //             return task.id === taskId ? taskToUpdate : task
    //         })
    //     ))
    // }

    // onAddTask = (newTaskName) => {
    //     let newTask = {
    //         id: uniqueid(),
    //         name: newTaskName,
    //         completed: false
    //     }

    //     this.setState(prevState => ({
    //         tasks: [...prevState.tasks, newTask]
    //     }))
    // }

    // onDeleteCompleted = () => {
    //     this.setState(preState => {

    //         let newState = preState.tasks.filter(task => !task.completed)
    //         return {
    //             tasks: newState
    //         }
    //     })
    // }

    render(){
        return (
            <section id="todo">
                <BrowserRouter>
                    <Switch>
                        <Route path="/add-task" component={AddTask} />
                        <Route path="/:filter?" component={ToDoList} />
                    </Switch>
                    <NavBar onDeleteCompleted={this.onDeleteCompleted} />
                </BrowserRouter>
            </section>
        )
    }
}

export default App