import React from 'react';

export default class TodoListHeader extends React.Component {
    render() {
        return (
            <thead>
            <tr>
                <th>task</th>
                <th>Action</th>
            </tr>
            </thead>
        );

    }
}