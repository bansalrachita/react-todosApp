/**
 * Created by rachitabansal on 9/14/16.
 */

import React from 'react';

export default class CreateTodos extends React.Component {

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="what should I do?" ref="createInput"/>
                <button>Create</button>
            </form>
        );

    }

    handleCreate(event){
        event.preventDefault();
        console.log(this.refs.createInput.value);
    }
}