import React from 'react';
import Header from '../Header/Header';
import Tasks from '../Tasks/Tasks';

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            tasks: [],
            filterText: '',
            filterDate: '',
            isSortEnabled: false,
            isIncreasingSort: false
        }
    }

    addTask = (task) => {
        this.setState(state => {
            const tasks = [...state.tasks];
            tasks.push(task);

            this.setState({
                tasks
            })
        });
    };

    filterTextChange = (event) => {
        this.setState({
            filterText: event.target.value
        })
    }

    filterDateChange = (event) => {
        this.setState({
            filterDate: event.target.value
        })
    }

    getTasksForRender = () => {
        let tasksForRender;
        const {filterText, filterDate, tasks, isSortEnabled, isIncreasingSort} = this.state;

        if (filterText && !filterDate) {
            tasksForRender = tasks.filter(task => task.text.includes(filterText));
        }

        if (filterText && filterDate) {
            tasksForRender = tasks.filter(task => task.text.includes(filterText) && task.date === filterDate)
        }

        if (!filterText && filterDate) {
            tasksForRender = tasks.filter(task => task.date === filterDate)
        }

        if (!filterText && !filterDate) {
            tasksForRender = [...this.state.tasks];
        }

        if (isSortEnabled && isIncreasingSort) {
            return tasksForRender.sort((a, b) => a.text > b.text ? 1 : -1);
        }

        if (isSortEnabled && !isIncreasingSort) {
            return tasksForRender.sort((a, b) => a.text < b.text ? 1 : -1);
        }

        return tasksForRender;
    }

    sortDirectionChange = () => {
        this.setState(state => ({
            isSortEnabled: true,
            isIncreasingSort: !state.isIncreasingSort
        }))
    }

    disableSort = () => {
        this.setState({
            isSortEnabled: false,
            isIncreasingSort: false
        })
    }

    render() {
        return (
            <div>
                <Header
                    addTask={this.addTask}
                    filterTextChange={this.filterTextChange}
                    filterDateChange={this.filterDateChange}
                    sortDirectionChange={this.sortDirectionChange}
                    disableSort={this.disableSort}
                />

                <Tasks tasks={this.getTasksForRender()} />
            </div>
        )
    }
}

export default Main;
