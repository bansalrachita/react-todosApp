/**
 * Created by rachitabansal on 9/13/16.
 */

import _ from  'lodash';
import React from 'react';
import TodoListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodoList extends React.Component {
    renderItems() {
        return _.map(this.props.todos, (todos, index) => <TodosListItem key={index}{...todos} />);
    }
    render() {
        console.log(this.props);
        return (
            <table>
                <TodoListHeader/>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>

        );

    }
}