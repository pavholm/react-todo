import * as React from 'react';
import Task from '../Task/Task';

class Tasks extends React.Component {
    render() {
        return (
            <div className={'tasks'}>
                {this.props.tasks.map(task => (
                    <Task task={task} />
                ))}
            </div>
        );
    }
}

export default Tasks;
