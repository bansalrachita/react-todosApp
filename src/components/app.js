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
                <CreateTodos/>
                <TodoList todos={this.state.todos}/>
            </div>
        );
    }
}