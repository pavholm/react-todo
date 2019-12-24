import * as React from 'react';

class Task extends React.Component {
    render() {
        return (
            <div className={'task'}>
                <span className={'task__text'}>
                    {this.props.task.text}
                </span>

                <span className={'task__date'}>
                    {`   ${this.props.task.date}`}
                </span>
            </div>
        )
    }
}

export default Task;
