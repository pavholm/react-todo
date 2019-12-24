import * as React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            date: ''
        }
    }

    onTaskTextChange = event => {
        this.setState({
            text: event.target.value
        });
    }

    onTaskDateChange = event => {
        this.setState({
            date: event.target.value
        })
    }

    onFilterTextChange = event => {
        this.props.onFilterTextChange(event);
    }

    addTask = () => {
        this.props.addTask({
            text: this.state.text,
            date: this.state.date
        });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.onTaskTextChange}
                />

                <input
                    type="date"
                    onChange={this.onTaskDateChange}
                />

                <input
                    type="text"
                    onChange={this.props.filterTextChange}
                />

                <input
                    type="date"
                    onChange={this.props.filterDateChange}
                />

                <button
                    type="button"
                    onClick={this.addTask}
                >
                    {'Add Task'}
                </button>

                <button onClick={this.props.sortDirectionChange}>{'Sort'}</button>
                <button onClick={this.props.disableSort}>{'X'}</button>
            </div>
        )
    }
}

export default Header;
