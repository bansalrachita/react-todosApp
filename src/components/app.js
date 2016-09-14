/**
 * Created by rachitabansal on 9/13/16.
 */
import React from 'react';
import CreateTodos from './create-todos';
import TodoList from './todos-list';

const todos = [
    {
        task: "do this1",
        isComplete: false
    },
    {
        task: "task2",
        isComplete:true
    }
];

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            todos
        }
    }
    render(){
        return(
            <div>
                <h1>
                    React Todos App
                </h1>
                <CreateTodos todos={this.state.todos} createTask={this.createTask.bind(this)}/>
                <TodoList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}/>
            </div>
        );
    }

    createTask(task){
        this.state.todos.push({
            task,
            isComplete:false
        });

        this.setState({
            todos: this.state.todos
        });
    }

    toggleTask(task){
        const foundTodo = _.find(this.state.todos, todo=> todo.task === task);
        foundTodo.isComplete = !foundTodo.isComplete;
        this.setState({todos: this.state.todos});
    }

    saveTask(newTask, oldTask){
        const foundTodo = _.find(this.state.todos, todo=> todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({todos: this.state.todos});
    }

    deleteTask(delTask){
        _.remove(this.state.todos, todo=> todo.task === delTask);
        this.setState({
            todos: this.state.todos
        });
    }
}