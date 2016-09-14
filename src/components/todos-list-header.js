import React from 'react';

export default class TodoList extends React.Component {
    render() {
        console.log(this.props.todos);
        return (
            <table>
                <thead>
                <tr>
                    <th>task</th>
                    <th>Action</th>
                </tr>
                </thead>
            </table>
        );

    }
}